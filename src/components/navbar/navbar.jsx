import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/images/logo_1.PNG';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Dropdown from '../dropdown/dropdown';
import MenuIcon from '@mui/icons-material/Menu';




export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);// Dropdown state
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setDropdown(false);
  };

  const handleDropdownToggle = () => {
    // Toggle dropdown on click for mobile view
    if (window.innerWidth <= 1024) {
      setDropdown((prev) => !prev);
    }
  };

  return (
    <nav className="nav">
      {/* Logo area */}
      <div className="logo-area">
        <div className="header-logo">
          <img className="logo-img" src={logo} alt="logo-img" />
        </div>

      </div>
      {/* Toggle inside logo area (or right after it) */}
      <button className="mobile-toggle" onClick={toggleMobileMenu}>
        <MenuIcon style={{ color: 'black' }} />
      </button>

      {/* Navigation Items */}
      <div className={`navbar-items ${mobileOpen ? 'open' : ''}`}>
        <ul  className='nav-links'>
          <li>
            <NavLink onClick={closeMobileMenu} to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeMobileMenu} to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              About
            </NavLink>
          </li>
          <li
  className="dropdown-nav"
  onMouseEnter={() => window.innerWidth > 1024 && setDropdown(true)}
  onMouseLeave={() => window.innerWidth > 1024 && setDropdown(false)}
>
  <div
    className="nav-link dropdown-toggle"
    onClick={() => setDropdown((prev) => !prev)} // Only here now
  >
    Products & Services <RiArrowDropDownLine />
  </div>

  {dropdown && <Dropdown onClick={closeMobileMenu} />}
</li>
          <li>
            <NavLink onClick={closeMobileMenu} to="/references" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Customer References
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeMobileMenu} to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
