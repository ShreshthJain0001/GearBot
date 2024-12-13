import React, { useState } from 'react';
import './CSS/navbar.css';
import { Link } from 'react-router-dom'; // Import Link for routing
import { Link as ScrollLink } from 'react-scroll';
import CarDropdown from './CarDropdown';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className='navbar'>
      <Link to="/"  id='logo'>
        <img src={require('./CSS/images/logostylecar.png')} alt="Logo" height='70px' />
      </Link>
      {/* Link for Home */}
      <Link to="/" className='navbarcontent' id='Home'>Home</Link>

      {/* Dropdown for Cars */}
      <div className='navbarcontent' id='Cars' onClick={() => setShowDropdown(!showDropdown)}>
        Cars
      </div>
      {showDropdown && <CarDropdown />}

      {/* Link for Support */}
      <ScrollLink to="footer" smooth={true} duration={1100} className='navbarcontent' id='Support'>
        Support
      </ScrollLink>
    </nav>
  );
};

export default Navbar;
