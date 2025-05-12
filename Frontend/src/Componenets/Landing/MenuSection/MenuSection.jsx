import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuSection.css';

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('menu-starters');
  const navigate = useNavigate();

  
  const menuCategories = [
    { id: 'menu-starters', title: 'Sweets', icon: 'bi-cup-hot' },
    { id: 'menu-breakfast', title: 'Breakfast', icon: 'bi-egg-fried' },
    { id: 'menu-lunch', title: 'Lunch', icon: 'bi-cup-straw' },

    { id: 'menu-dinner', title: 'Snacks', icon: 'bi-palette' }
  ];

  const menuItems = {
    'menu-starters': [
      {
        "name": "Mysore Pak",
        "description": "A rich, ghee-filled, gram flour-based sweet from Mysore.",
        "price": "₹150",
        "img": "mysorepark.webp"
      },
      {
        "name": "Jalebi",
        "description": "Deep-fried, crispy, and chewy syrup-soaked spirals of sweetness.",
        "price": "₹50",
        "img": "jelebi.webp"
      },
      {
        "name": "Gulab Jamun",
        "description": "Soft, deep-fried dough balls soaked in rose-flavored sugar syrup.",
        "price": "₹70",
        "img": "GulabJamun.jpg"
      },
    
      {
        "name": "BesanLadoo",
        "description": "Sweet, round balls made from flour, sugar, and ghee.",
        "price": "₹60",
        "img": "beasan ladu.webp"
      },
    
      {
        "name": "Kaju Katli",
        "description": "Cashew nut-based, diamond-shaped fudge with a smooth texture.",
        "price": "₹200",
        "img": "kaju-katli.webp"
      },
      {
        "name": "Soan Papdi",
        "description": "Light, flaky, and sweet cubes made from gram flour and sugar.",
        "price": "₹90",
        "img": "Soan Papdi.jpg"
      },
     
    
    ],
    
    'menu-lunch': [
      { name: "NorthIndianThali", description: "North indian Thali, romaine, parmesan in a flour tortilla", price: "₹100", img: "northindianthali.png" },
      { name: "SouthindianThali", description: "Triple-decker with turkey, bacon, lettuce, and tomato", price: "₹120", img: "southindianthali.jpg" },
      { name: "Gobi Rice", description: "Tomatoes, cucumber, olives, feta, and red onion with oregano", price: "₹70", img: "gobi-rice.jpg" },
    

      { name: "Panner -manchuri", description: "Grilled fish, cabbage slaw, and chipotle aioli in corn tortillas", price: "₹80", img: "menu-item-1.png" },
      { name: "Tomato-Saru", description: "Arborio rice slowly cooked with wild mushrooms and parmesan", price: "₹20", img: "Tomato-saru.jpg" },
      { name: "Veggie Burger", description: "House-made plant-based patty with all the fixings", price: "₹1200", img: "menu-item-2.png" },
    ],'menu-breakfast': [
      { name: "Idli Vada", description: "Toasted bread with fresh tomatoes, garlic, basil, and olive oil", price: "₹35", img: "idlivada.png" },
      { name: "Dosa", description: "Lightly breaded squid served with marinara sauce", price: "₹35", img: "Dosa.jpg" },
      { name: "Pulav", description: "Fresh mozzarella, tomatoes, and basil with balsamic glaze", price: "₹35", img: "pulav.jpg" },
      { name: "Poori", description: "Mushroom caps filled with seasoned breadcrumbs and cheese", price: "₹30", img: "pori.jpg" },
      { name: "Upitu", description: "Chilled jumbo shrimp with zesty cocktail sauce", price: "₹40", img: "upitu.jpg" },
      { name: "Setdosa", description: "Creamy dip with spinach, artichokes, and melted cheese", price: "₹40", img: "setdosa.jpg" },
    ],
    'menu-dinner': [
      { name: "Filet Mignon", description: "8oz tenderloin with mashed potatoes and seasonal vegetables", price: "₹3000", img: "menu-item-2.png" },
      { name: "Grilled Salmon", description: "Wild-caught salmon with lemon butter sauce and asparagus", price: "₹2200", img: "menu-item-1.png" },
      { name: "Chicken Parmesan", description: "Breaded chicken breast topped with marinara and mozzarella", price: "₹1700", img: "menu-item-6.png" },
      { name: "Eggplant Lasagna", description: "Layers of eggplant, ricotta, mozzarella, and tomato sauce", price: "₹1500", img: "menu-item-5.png" },
      { name: "Shrimp Scampi", description: "Jumbo shrimp in garlic butter sauce over linguine", price: "₹2000", img: "menu-item-4.png" },
      { name: "Prime Rib", description: "Slow-roasted prime rib with au jus and horseradish cream", price: "₹2700", img: "menu-item-3.png" },
    ],
  };

  
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

 
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, [activeTab]);

 
  const handleCardClick = () => {
    navigate('/order');
  };

  return (
    <section id="menu" className="menu-section">
      
      <div class="container section-title" data-aos="fade-up">
        <h2>Our Menu</h2>
        <p><span>Check Our</span> <span class="description-title">Yummy Menu</span></p>
      </div>

      <div className="container">
       
        <div className="menu-tcabs-wrapper" data-aos="fade-up" data-aos-delay="100">
          <ul className="menu-tabs">
            {menuCategories.map((category) => (
              <li key={category.id} className="menu-tab-item">
                <button 
                  className={`menu-tab-button ${activeTab === category.id ? 'active' : ''}`}
                  onClick={() => handleTabChange(category.id)}
                >
                  <i className={`bi ${category.icon}`}></i>
                  <h4>{category.title}</h4>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu Content */}
        <div className="menu-content" data-aos="fade-up" data-aos-delay="200">
          {menuCategories.map((category) => (
            <div 
              key={category.id}
              className={`menu-tab-content ${activeTab === category.id ? 'active' : ''}`}
              id={category.id}
            >
              <div className="menu-header">
                <p>Our Selection</p>
                <h3>{category.title}</h3>
              </div>

              <div className="menu-items-grid">
                {menuItems[category.id].map((item, index) => (
                  <div className="menu-item" key={index} onClick={handleCardClick}>
                    <div className="menu-item-img-container">
                      <img
                        src={`/img/menu/${item.img}`}
                        className="menu-img"
                        alt={item.name}
                        loading={index < 3 ? "eager" : "lazy"}
                      />
                      <div className="menu-item-overlay">
                        <button className="view-button">
                          <i className="bi bi-eye"></i>
                        </button>
                      </div>
                    </div>
                    <div className="menu-item-info">
                      <h4>{item.name}</h4>
                      <p className="ingredients">{item.description}</p>
                      <p className="price">{item.price}</p>
                      
                    </div>
                    <button className="buy-now-button" onClick={handleCardClick}>
                        Buy Now
                      </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;