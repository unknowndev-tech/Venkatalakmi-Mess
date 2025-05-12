import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './OrderPage.css';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineArrowLeft } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { createClient } from '@supabase/supabase-js';
import { 
  menuCategories, 
  getAvailableCategories, 
  getCurrentDayOfWeek, 
  getCurrentTimeInfo, 
  getDaySpecificMenuItems 
} from './menuData';

// Initialize Supabase client - replace with your actual URL and anon key
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const OrderPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('menu-breakfast');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [availableCategories, setAvailableCategories] = useState([]);
  const [currentDayOfWeek, setCurrentDayOfWeek] = useState('');
  const [menuItemsFromDB, setMenuItemsFromDB] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingQuantity, setEditingQuantity] = useState(null);
  
  const cartRef = useRef(null);
  const [position, setPosition] = useState({ top: 80, left: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Fetch menu items from Supabase
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const { data, error } = await supabase
          .from('menu_items')
          .select('*');
          
        if (error) {
          console.error('Error fetching menu items:', error);
          return;
        }
        
        if (data) {
          // Process the fetched data to handle the days field (stored as JSONB)
          const processedData = data.map(item => ({
            ...item,
            days: Array.isArray(item.days) ? item.days : JSON.parse(item.days || '[]')
          }));
          
          setMenuItemsFromDB(processedData);
        }
      } catch (error) {
        console.error('Error processing menu items:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchMenuItems();
    
    // Optional: Set up a subscription to listen for changes
    const subscription = supabase
      .channel('table-db-changes')
      .on('postgres_changes', { 
        event: '*', 
        schema: 'public', 
        table: 'menu_items' 
      }, payload => {
        console.log('Database change detected:', payload);
        // Refresh data when changes are detected
        fetchMenuItems();
      })
      .subscribe();
      
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    // Set responsive initial position once cartRef is available
    const setInitialPosition = () => {
      if (cartRef.current) {
        const isMobile = window.innerWidth <= 768;
        const cartWidth = cartRef.current.offsetWidth;
        const cartHeight = cartRef.current.offsetHeight;

        const defaultLeft = isMobile
          ? window.innerWidth - cartWidth - 20
          : window.innerWidth - cartWidth - 40;

        const defaultTop = 80;

        setPosition({
          top: Math.min(defaultTop, window.innerHeight - cartHeight),
          left: Math.min(defaultLeft, window.innerWidth - cartWidth),
        });
      }
    };

    setInitialPosition();
    window.addEventListener('resize', setInitialPosition);

    return () => {
      window.removeEventListener('resize', setInitialPosition);
    };
  }, []);

  const handleDragStart = (e) => {
    const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;

    setDragging(true);
    setOffset({
      x: clientX - cartRef.current.getBoundingClientRect().left,
      y: clientY - cartRef.current.getBoundingClientRect().top,
    });
  };

  const handleDragMove = (e) => {
    if (!dragging) return;

    const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;

    const newLeft = clientX - offset.x;
    const newTop = clientY - offset.y;

    setPosition({
      top: Math.min(Math.max(newTop, 0), window.innerHeight - cartRef.current.offsetHeight),
      left: Math.min(Math.max(newLeft, 0), window.innerWidth - cartRef.current.offsetWidth),
    });
  };

  const handleDragEnd = () => setDragging(false);

  useEffect(() => {
    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('touchmove', handleDragMove);
    document.addEventListener('touchend', handleDragEnd);

    return () => {
      document.removeEventListener('mousemove', handleDragMove);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchmove', handleDragMove);
      document.removeEventListener('touchend', handleDragEnd);
    };
  }, [dragging, offset]);

  useEffect(() => {
    // Get the current day of the week
    const currentDay = getCurrentDayOfWeek();
    setCurrentDayOfWeek(currentDay);
    
    // Update day of week every day at midnight
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const timeUntilMidnight = tomorrow - new Date();
    
    const dayTimer = setTimeout(() => {
      const newDay = getCurrentDayOfWeek();
      setCurrentDayOfWeek(newDay);
    }, timeUntilMidnight);
    
    return () => clearTimeout(dayTimer);
  }, []);

  // Function to check available categories based on current time
  const updateAvailableCategories = () => {
    const available = getAvailableCategories();
    setAvailableCategories(available);
    
    // If the current active tab is not available, switch to an available one
    if (!available.includes(activeTab)) {
      setActiveTab(available[0]);
    }
  };

  // Initialize available categories and set up an interval to update them
  useEffect(() => {
    updateAvailableCategories();
    
    // Update available categories every minute
    const intervalId = setInterval(updateAvailableCategories, 60000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
      
      const total = JSON.parse(storedCart).reduce((acc, item) => {
        return acc + (item.price * item.quantity);
      }, 0);
      setTotalAmount(total);
    }
    
    // Set initial active tab based on available categories
    if (availableCategories.length > 0 && !availableCategories.includes(activeTab)) {
      setActiveTab(availableCategories[0]);
    }
  }, [availableCategories]);

  const handleTabChange = (tabId) => {
    if (availableCategories.includes(tabId)) {
      setActiveTab(tabId);
      window.scrollTo({
        top: document.getElementById('menu-tabs').offsetTop - 100,
        behavior: 'smooth'
      });
    } else {
      // Show a message that this category is not available now
      const notification = document.getElementById('cart-notification');
      if (notification) {
        notification.innerHTML = `<i class="bi bi-x-circle"></i> This menu is not available now`;
        notification.classList.add('show');
        setTimeout(() => {
          notification.classList.remove('show');
        }, 2000);
      }
    }
  };

  const handleBackToMenu = () => {
    navigate('/');
  };

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  // Modified handleQuantityChange function to handle special sweets rules
  const handleQuantityChange = (itemId, action, category) => {
    const itemIndex = cart.findIndex(item => item.id === itemId);
    
    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      const isSweetsCategory = category === 'menu-starters';
      
      if (action === 'add') {
        // For sweets, increment by 10
        const incrementAmount = isSweetsCategory ? 10 : 1;
        updatedCart[itemIndex].quantity += incrementAmount;
      } else if (action === 'subtract') {
        // For sweets, decrement by 10, and ensure minimum quantity is 50 or remove
        if (isSweetsCategory) {
          if (updatedCart[itemIndex].quantity > 60) { // If more than minimum (50) + increment (10)
            updatedCart[itemIndex].quantity -= 10;
          } else {
            // If quantity would go below 50, remove the item
            updatedCart.splice(itemIndex, 1);
          }
        } else {
          // Normal items - decrement by 1 as usual
          if (updatedCart[itemIndex].quantity > 1) {
            updatedCart[itemIndex].quantity -= 1;
          } else {
            updatedCart.splice(itemIndex, 1);
          }
        }
      }
      
      updateCart(updatedCart);
    }
  };

  // Handle manual quantity input
  const handleManualQuantityChange = (itemId, value, category) => {
    const itemIndex = cart.findIndex(item => item.id === itemId);
    const isSweetsCategory = category === 'menu-starters';
    const minQuantity = isSweetsCategory ? 50 : 1;
    
    // Parse input as integer
    let newQuantity = parseInt(value, 10);
    
    // If input is not a valid number, keep existing quantity
    if (isNaN(newQuantity)) {
      return;
    }
    
    // Enforce minimum quantity rules
    if (isSweetsCategory) {
      // Ensure quantity is a multiple of 10 for sweets
      newQuantity = Math.ceil(newQuantity / 10) * 10;
      
      // Enforce minimum quantity of 50 for sweets
      if (newQuantity < 50) {
        newQuantity = 50;
      }
    } else {
      // Ensure minimum quantity of 1 for other items
      if (newQuantity < 1) {
        newQuantity = 1;
      }
    }
    
    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity = newQuantity;
      updateCart(updatedCart);
    }
    
    // Exit edit mode
    setEditingQuantity(null);
  };

  // Handle quantity input focus events
  const handleQuantityInputFocus = (itemId) => {
    setEditingQuantity(itemId);
  };

  const handleQuantityInputBlur = (itemId, value, category) => {
    handleManualQuantityChange(itemId, value, category);
  };

  const handleQuantityInputKeyDown = (e, itemId, value, category) => {
    if (e.key === 'Enter') {
      handleManualQuantityChange(itemId, value, category);
      e.target.blur();
    }
  };

  // Modified addToCart function to handle special sweets rules
  const addToCart = (item, category) => {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    const isSweetsCategory = category === 'menu-starters';
    const initialQuantity = isSweetsCategory ? 50 : 1;
    
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      // For sweets, increment by 10, for others by 1
      const incrementAmount = isSweetsCategory ? 10 : 1;
      updatedCart[existingItemIndex].quantity += incrementAmount;
      updateCart(updatedCart);
    } else {
      updateCart([...cart, { ...item, quantity: initialQuantity }]);
    }
    
    const notification = document.getElementById('cart-notification');
    notification.classList.add('show');
    setTimeout(() => {
      notification.classList.remove('show');
    }, 2000);
  };

  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      return acc + (item.price * item.quantity);
    }, 0);
    setTotalAmount(total);
  }, [cart]);

  const handleCheckout = () => {
    navigate('/cart');
    setCartOpen(false);
  };

  const timeInfo = getCurrentTimeInfo();
  const daySpecificMenu = getDaySpecificMenuItems(menuItemsFromDB, currentDayOfWeek);

  return (
    <div className="order-page">
      <div id="cart-notification" className="cart-notification">
        <i className="bi bi-check-circle"></i> Item added to cart
      </div>
    
      <div className="cart-section"
        ref={cartRef}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
          position: 'fixed',
          cursor: 'grab',
        }}>
        <div className="cart-toggle" onClick={() => setCartOpen(!cartOpen)}>
          <img src="/img/shopping-cart.png" alt="Cart" className="cart-icon" />
          {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
        </div>
        <Link to="/cart" className="view-cart-link">
          <i className="bi bi-bag"></i> View Cart
        </Link>
      </div>
      
      <div className="container">
        <div className="order-header">
          <button className="new-back-button" onClick={handleBackToMenu}>
            <i className="bi bi-arrow-left"></i>  <AiOutlineArrowLeft /> Back to Menu
          </button>
          <h1>Order Your Food</h1>
          <p>Current time: {timeInfo.time} - {timeInfo.message}</p>
          <p>Today's {currentDayOfWeek} Special Menu</p>
          {/* <p><strong>Starters available 24/7!</strong></p> */}
        </div>
        
        <div className="menu-tabs-wrapper" id="menu-tabs" data-aos="fade-up" data-aos-delay="100">
          <ul className="menu-tabs">
            {menuCategories.map((category) => {
              const isAvailable = availableCategories.includes(category.id);
              return (
                <li key={category.id} className="menu-tab-item">
                  <button 
                    className={`menu-tab-button ${activeTab === category.id ? 'active' : ''} ${!isAvailable ? 'disabled' : ''}`}
                    onClick={() => handleTabChange(category.id)}
                    disabled={!isAvailable}
                  >
                    <i className={`bi ${category.icon}`}></i>
                    <h4>{category.title}</h4>
                    {!isAvailable && (
                      <span className="lock-icon">
                        <FontAwesomeIcon icon={faLock} />
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        
        <div className="menu-content" data-aos="fade-up" data-aos-delay="200">
          {isLoading ? (
            <div className="loading-spinner">
              <p>Loading menu items...</p>
              {/* Add your spinner component here if you have one */}
            </div>
          ) : (
            menuCategories.map((category) => (
              <div 
                key={category.id}
                className={`menu-tab-content ${activeTab === category.id ? 'active' : ''}`}
                id={category.id}
              >
                <div className="menu-header">
                  <p>Our {currentDayOfWeek} Selection</p>
                  <h3>{category.title}</h3>
                  {category.id === 'menu-starters' && (
                    <div className="menu-available-message">
                      <p><strong> Note:</strong> For Sweets minimum order quantity is 50 pieces </p>
                    </div>
                  )}
                  {!availableCategories.includes(category.id) && (
                    <div className="menu-unavailable-message">
                      <i className="bi bi-clock"></i> This menu is not available at this time
                    </div>
                  )}
                </div>
                
                {availableCategories.includes(category.id) ? (
                  <div className="order-items-grid">
                    {daySpecificMenu[category.id] && daySpecificMenu[category.id].length > 0 ? (
                      daySpecificMenu[category.id].map((item) => {
                        const cartItem = cart.find(cartItem => cartItem.id === item.id);
                        const quantity = cartItem ? cartItem.quantity : 0;
                        const isSweetsCategory = category.id === 'menu-starters';
                        
                        return (
                          <div className="order-item" key={item.id}>
                            <div className="order-item-img-container">
                            <img
                              src={item.img.startsWith('http') ? item.img : `/img/menu/${item.img}`}
                              className="order-img"
                              alt={item.name}
                            />
                              <div className="order-item-overlay">
                                {/* <button className="view-details-button">
                                  <i className="bi bi-eye"></i>
                                </button> */}
                              </div>
                            </div>
                            <div className="order-item-info">
                       <h4>{item.name.replace(/([a-zA-Z])\(/, '$1      (')}</h4>



                              <p className="ingredients">{item.description}</p>
                              <p className="price">₹{item.price} {isSweetsCategory && '(per piece)'}</p>
                              
                              <div className="order-actions">
                                {quantity > 0 ? (
                                  <div className="quantity-selector">
                                    <button
                                      onClick={() => handleQuantityChange(item.id, 'subtract', category.id)}
                                      className="quantity-btn"
                                    >
                                      <AiOutlineMinus style={{ color: 'black' }} />
                                    </button>
                                    
                                    {editingQuantity === item.id ? (
                                      <input
                                        type="number"
                                        className="quantity-input"
                                        defaultValue={quantity}
                                        min={isSweetsCategory ? 50 : 1}
                                        step={isSweetsCategory ? 10 : 1}
                                        onBlur={(e) => handleQuantityInputBlur(item.id, e.target.value, category.id)}
                                        onKeyDown={(e) => handleQuantityInputKeyDown(e, item.id, e.target.value, category.id)}
                                        autoFocus
                                      />
                                    ) : (
                                      <>
                                        <span 
                                          className="quantity"
                                          onClick={() => handleQuantityInputFocus(item.id)}
                                        >
                                          {quantity}{isSweetsCategory && ' '}
                                        </span>
                                     <button
  className="quantity-edit-btn"
  onClick={() => handleQuantityInputFocus(item.id)}
  title="Enter quantity manually"
>
  <i className="bi bi-pencil"></i>
  <span> Enter quantity manually</span>
</button>


                                      </>
                                    )}
                                    
                                    <button
                                      onClick={() => handleQuantityChange(item.id, 'add', category.id)}
                                      className="quantity-btn"
                                    >
                                      <AiOutlinePlus style={{ color: 'black' }} />
                                    </button>
                                  </div>
                                ) : (
                                  <button className="add-to-cart-button" onClick={() => addToCart(item, category.id)}>
                                    <i className="bi bi-cart-plus"></i> {isSweetsCategory ? 'Add 50 pieces' : 'Add to Cart'}
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="no-items-message">
                        <p>No special menu items available for {currentDayOfWeek} in this category.</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="locked-menu-content">
                    <div className="locked-menu-message">
                      <i className="bi bi-lock-fill"></i>
                      <h3>This menu is currently unavailable</h3>
                      <p>Please check back during the appropriate hours:</p>
                      <ul>
                        <li><strong>Breakfast:</strong> 5:00 AM - 11:00 AM</li>
                        <li><strong>Lunch:</strong> 11:00 AM - 5:00 PM</li>
                        <li><strong>Dinner:</strong> 5:00 PM - 5:00 AM</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderPage;