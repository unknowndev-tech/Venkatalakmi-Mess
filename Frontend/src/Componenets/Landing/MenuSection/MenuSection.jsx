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
      name: "Mysore Pak",
      description: "A rich, ghee-filled, gram flour-based sweet from Mysore.",
      price: "₹150",
      img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/sweets%20-2%2Fmysorepark.webp?alt=media&token=547d5d0d-4f65-46a9-a62b-f9178df7c2d5"
    },
    {
      name: "Jalebi",
      description: "Deep-fried, crispy, and chewy syrup-soaked spirals of sweetness.",
      price: "₹50",
      img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/sweets%20-2%2Fjelebi.webp?alt=media&token=10784a1c-19a0-431f-b0a4-4492c0806212"
    },
    {
      name: "Gulab Jamun",
      description: "Soft, deep-fried dough balls soaked in rose-flavored sugar syrup.",
      price: "₹70",
      img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/sweets%20-2%2FGulabJamun.jpg?alt=media&token=94bdd095-7f55-483e-b69b-cee3fc482c45"
    },
    {
      name: "Besan Ladoo",
      description: "Sweet, round balls made from flour, sugar, and ghee.",
      price: "₹60",
      img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/sweets%20-2%2Fbeasan%20ladu.webp?alt=media&token=a0242dbe-88ac-42b0-acc2-93319756ac37"
    },
    {
      name: "Godambi Barfi",
      description: "Cashew nut-based, diamond-shaped fudge with a smooth texture.",
      price: "₹200",
      img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/sweets%20-2%2Fkaju-katli.webp?alt=media&token=b1639539-d433-400a-b9e7-682764d5153f"
    },
    {
      name: "Badam Barfi",
      description: "Light, flaky, and sweet cubes made from gram flour and sugar.",
      price: "₹90",
      img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/sweets%2FBadam%20Barfi.webp?alt=media&token=d33ecf69-26d2-449a-954b-c288c55e3c0b"
    }
  ],
  'menu-lunch': [
    {
      name: "Simple Meal",
      description: "Simple meal: Served with salt, pickle chutney, vegetable curry, rice, sambar, curry, fried snack, payasa , and buttermilk.",
      price: 80,
      img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Meal%2Fsimple%20Meal%201.webp?alt=media&token=a743c15b-57d1-41ec-80a2-d1658dc0276c"
    },
    {
      name: "Sweat Meal",
      description: "Served with salt, pickle chutney, vegetable curry, rice, sambar, curry, fried snack, payasa, buttermilk, and sweet.",
      price: 99,
      img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Meal%2FSweet%20Meal.jpg?alt=media&token=4e5dd84d-0c23-4a85-bd73-2d09af9ea9b6"
    },
    {
      name: "Special Meal",
      description: "Special meal: Served with salt, pickle chutney, vegetable curry, rice, sambar, curry, fried snack, payasa (sweet dish), buttermilk, sweet, and one special item.",
      price: 150,
      img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Meal%2FSpecial%20meal.avif?alt=media&token=1ff54b27-8fec-44f9-811d-c47d49fcb646"
    }
  ],
  'menu-breakfast': [
    {
      name: "Idli Vada",
      description: "Toasted bread with fresh tomatoes, garlic, basil, and olive oil",
      price: 40,
      img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Breakfast%2Fidlivada.png?alt=media&token=8f7f0758-4187-4f4c-8178-7fc66b520625"
    },
    {
      name: "Idli",
      description: "One plate of idli contains 3 idlis, served with chutney and sambar",
      price: 40,
      img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Breakfast%2Fidli.webp?alt=media&token=75ca7045-7e93-4fd8-920d-c1e705ead301"
    },
    {
      name: "Vada",
      description: "A crispy, fried lentil doughnut-like snack, often served with chutneyand Sambar.",
      price: 35,
      img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Breakfast%2FVada.jpeg?alt=media&token=e97ef510-e991-4c6b-9575-724943cbb67e"
    },
    {
      name: "Buns",
      description: "Soft, round bread rolls, commonly enjoyed as a snack or with meals.",
      price: 30,
      img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Breakfast%2FBuns.jpg?alt=media&token=9ee14da0-c4e8-4947-bf5d-bb43f37e5101"
    },
    {
      name: "Avalaki",
      description: " A savory dish made from flattened rice cooked with spices and vegetables.",
      price: 25,
      img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Breakfast%2FAvalaki.jpg?alt=media&token=84fc56f5-4fd5-48d1-a9c4-5fc8c0c22dbf"
    },
    {
      name: "Upitu",
      description: "Chilled jumbo shrimp with zesty cocktail sauce",
      price: 25,
      img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Breakfast%2Fupitu.jpg?alt=media&token=3beff09d-0546-43f6-9eeb-02d323152be1"
    },
    {
      name: "Kesari Bath",
      description: " A sweet, rich semolina dessert flavored with ghee, saffron, and cardamom.",
      price: 25,
      img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Breakfast%2FKesari%20Bath.jpg?alt=media&token=3c3ac7c0-e019-4dbc-8b6c-3c5fedc5f368"
    }
  ],
  'menu-dinner': [
    {
      name: "Chakuli",
      description: "Toasted bread with fresh tomatoes, garlic, basil, and olive oil",
      price: 50,
      unit: "per pack",
      img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Snacks%2FChakkuli.jpg?alt=media&token=a9dc90cf-5ebc-4e2f-bfe1-d283d1427841"
    },
    {
      name: "Jolladh mixture",
      description: "Jolladh mixture is a spicy and crunchy snack made from puffed jowar (sorghum) mixed , peanuts, and spices.",
      price: 340,
      unit: "per kg",
      img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Snacks%2FJolladh%20Mixture.jpg?alt=media&token=c57c7b9e-1e9c-4e03-8f5b-dc4d146dfa4a"
    },
    {
      name: "Rich Mixture",
      description: "Rich Mixture is a premium, flavorful Indian snack made with a variety of fried ingredients like sev, boondi, nuts, curry leaves, and spices.",
      price: 410,
      unit: "per kg",
      img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Snacks%2FRich%20Mixture.webp?alt=media&token=03307189-c990-4a41-b53b-c42d13e8ccdf"
    },
    {
      name: "Thengoli",
      description: "Mushroom caps filled with seasoned breadcrumbs and cheese",
      price: 50,
      unit: "per pack",
      img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Snacks%2FThenglu.png?alt=media&token=4c87d032-50fb-41c4-b207-0b1ead5240d8"
    }
  ]
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
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Menu</h2>
        <p><span>Check Our</span> <span className="description-title">Yummy Menu</span></p>
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
                        src={item.img.includes('https://') ? item.img : `/img/menu/${item.img}`}
                        className="menu-img"
                        alt={item.name}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/api/placeholder/300/200";
                        }}
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