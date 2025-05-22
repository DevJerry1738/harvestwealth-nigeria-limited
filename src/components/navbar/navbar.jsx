import React, { useState } from 'react'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/images/logo_1.PNG'
import { RiArrowDropDownLine } from 'react-icons/ri';
import Dropdown from '../dropdown/dropdown'

const drawerWidth = 240;




export default function Navbar(props) {
  const [dropdown, setDropdown] = React.useState(false)

  const onMouseEnter = () => {
    setDropdown(true)
  };
  const onMouseLeave = () => {
    setDropdown(false)
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
      <div className="nav-home">
        <Link className='home-link' to={'/'}>
          <Typography variant="h6" sx={{ m: 2 }}>
            Home
          </Typography>
        </Link>
      </div>

      <Divider />
      <List>
        
        <Link to={'/about'} className="nav-link"
          style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }} // Remove text decoration
        >
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'left' }}>

              <ListItemText primary={'About'}
                sx={{
                  '&:hover': {

                    textDecoration: 'underline', // Underline on hover
                  },
                }} />

            </ListItemButton>
          </ListItem>
        </Link>
        <Link to={'/epc'} className="nav-link"
          style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }} // Remove text decoration
        >
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'left' }}>

              <ListItemText primary={'EPC'}
                sx={{
                  '&:hover': {

                    textDecoration: 'underline', // Underline on hover
                  },
                }} />

            </ListItemButton>
          </ListItem>
        </Link>
        <Link to={'/spa'} className="nav-link"
          style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }} // Remove text decoration
        >
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'left' }}>

              <ListItemText primary={'Switchgear Panel Assembly'}
                sx={{
                  '&:hover': {

                    textDecoration: 'underline', // Underline on hover
                  },
                }} />

            </ListItemButton>
          </ListItem>
          
        </Link>
        <Link to={'/references'} className="nav-link"
          style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }} // Remove text decoration
        >
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'left' }}>

              <ListItemText primary={'References'}
                sx={{
                  '&:hover': {

                    textDecoration: 'underline', // Underline on hover
                  },
                }} />

            </ListItemButton>
          </ListItem>
        </Link>
        <Link to={'/contact'} className="nav-link"
          style={{ textDecoration: 'none', color: 'inherit', textAlign: 'center' }} // Remove text decoration
        >
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'left' }}>

              <ListItemText primary={'Contact'}
                sx={{
                  '&:hover': {

                    textDecoration: 'underline', // Underline on hover
                  },
                }} />

            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <div className='nav'>
        <IconButton
          className="nav-toggle"
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' } }}
        >
          <MenuIcon sx={{ color: 'white' }} />
        </IconButton>
        <div className="logo-area">
          <div className="header-logo">
            <img className='logo-img' src={logo} alt="logo-img" />
            <p>RC: 442927</p>
          </div>

          <Link to='/' className='title'>
            HARVESTWEALTH NIG LTD.
          </Link>
        </div>
        <div className="navbar-items">
          <ul>
            <li className="nav-items">
              <NavLink
                to={`/`}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                Home
              </NavLink>
              <NavLink

                to={`/about`}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                About
              </NavLink>
              <li className='dropdown-nav' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <div className="ecp-services nav-items">
                  Products & Services
                  <RiArrowDropDownLine />
                </div>

                {dropdown && <Dropdown onClick={closeMenu} />}
              </li>
              <NavLink

                to={`/references`}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                Customer References
              </NavLink>
              <NavLink

                to={`/contact`}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                Contact Us
              </NavLink>

            </li>
          </ul>
        </div>
      </div>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          disableScrollLock={true}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' }, // Show drawer for small and medium screens
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#2e6f95', // Match the website's theme (dark background)
              color: 'white', // Text color matching the theme
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  )

}
