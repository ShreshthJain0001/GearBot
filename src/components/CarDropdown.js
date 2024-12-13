import React, { useState } from 'react';
import './CSS/CarDropdown.css';

const CarDropdown = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = {
    'Limited Edition': [
      { name: 'Bugatti Chiron', link: '#' },
      { name: 'Ferrari LaFerrari', link: '#' },
      { name: 'Pagani Huayra', link: '#' },
      { name: 'McLaren P1', link: '#' },
      { name: 'Koenigsegg Agera RS', link: '#' }
    ],
    'Luxury & Exotic': [
      { name: 'Rolls Royce Phantom', link: '#' },
      { name: 'Bentley Continental GT', link: '#' },
      { name: 'Volvo XC90', link: '#' },
      { name: 'Cadillac Escalade', link: '#' },
      { name: 'Aston Martin DB11', link: '#' },
      { name: 'Lamborghini Aventador', link: '#' },
      { name: 'Porsche Panamera', link: '#' },
      { name: 'Maserati Quattroporte', link: '#' },
      { name: 'Mercedes-Benz S-Class', link: '#' },
      { name: 'Jaguar XJ', link: '#' },
      { name: 'Land Rover Range Rover', link: '#' },
      { name: 'BMW 7 Series', link: '#' },
      { name: 'Audi A8', link: '#' },
      { name: 'Tesla Model S', link: '#' }
    ],
    'High Range (Above 2 Crores)': [
      { name: 'Mercedes-Benz GLS', link: '#' },
      { name: 'BMW X7', link: '#' },
      { name: 'Audi Q7', link: '#' },
      { name: 'Lexus LX', link: '#' },
      { name: 'Porsche Cayenne', link: '#' },
      { name: 'Tesla Model X', link: '#' },
      { name: 'Range Rover Sport', link: '#' },
      { name: 'Maserati Levante', link: '#' },
      { name: 'Ferrari Portofino', link: '#' },
      { name: 'Bentley Bentayga', link: '#' }
    ],
    'Mid Range': [
      { name: 'Toyota Fortuner', link: '#' },
      { name: 'Ford Endeavour', link: '#' },
      { name: 'Jeep Grand Cherokee', link: '#' },
      { name: 'Hyundai Santa Fe', link: '#' },
      { name: 'Kia Telluride', link: '#' },
      { name: 'Honda CR-V', link: '#' },
      { name: 'Mazda CX-9', link: '#' },
      { name: 'Subaru Outback', link: '#' },
      { name: 'Nissan Murano', link: '#' },
      { name: 'Volkswagen Touareg', link: '#' }
    ],
    'Economy Friendly': [
      { name: 'Honda Civic', link: '#' },
      { name: 'Toyota Corolla', link: '#' },
      { name: 'Hyundai Elantra', link: '#' },
      { name: 'Kia Seltos', link: '#' },
      { name: 'Ford EcoSport', link: '#' },
      { name: 'Maruti Suzuki Baleno', link: '#' },
      { name: 'Tata Nexon', link: '#' },
      { name: 'Volkswagen Polo', link: '#' },
      { name: 'Renault Kwid', link: '#' },
      { name: 'Nissan Micra', link: '#' },
      { name: 'Chevrolet Spark', link: '#' },
      { name: 'Skoda Fabia', link: '#' }
    ]
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <div className="dropdown-container">
      {Object.keys(categories).map((category) => (
        <div key={category} className="dropdown-category">
          <div className="category-title" onClick={() => handleCategoryClick(category)}>
            {category}
          </div>
          {activeCategory === category && (
            <div className="dropdown-brands">
              {categories[category].map((brand, idx) => (
                <a href={brand.link} key={idx} className="dropdown-brand">
                  {brand.name}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CarDropdown;
