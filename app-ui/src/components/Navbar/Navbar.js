import React, { useState, useEffect } from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import { Dropdown } from '../Dropdown';
import './Navbar.css';

const Navbar = (props) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [navbarColor, setNavbarColor] = useState('transparent');
  const [navbarHeight, setNavbarHeight] = useState(0);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const dropDownItems = [
    {
      title: 'About me',
      path: '/info'
    }, 
    {
      title: 'Contact us',
      path: '/contact'
    }
  ]

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      setNavbarColor('transparent');
      setNavbarHeight(0);
    } else if (window.scrollY > 70) {
      setNavbarColor('#242424');
      setNavbarHeight(80);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  }, []);

  useEffect(() => {
    showButton();
    if(localStorage.getItem('token')) {
      setIsLogged(true)
    }
  }, [props.token.data]);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar' style={{backgroundColor: navbarColor, height: navbarHeight}}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Cabbage <i className='fas fa-paw' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/blogs'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Blogs
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/coming'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Collections
              </Link>
            </li>
            <li 
              className='nav-item'
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}>
              <Link
                to='/info'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Info <i className='fas fa-caret-down' />
              </Link>
              {dropdown && <Dropdown items={dropDownItems} />}
            </li>

            {!isLogged ? 
              <li>
                <Link
                  to='/sign-in'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  Sign In
                </Link>
              </li>
            : 
            <li>
              <Link
                to='/upload'
                className='nav-links-mobile upload-btn'
                onClick={closeMobileMenu}
              >
                Upload Blog
              </Link>
            </li>}
          </ul>
          {button && isLogged ? 
            <Button path='/upload' buttonStyle='btn--outline'>Upload Blog</Button>
            : null }
          {button && !isLogged ? 
            <Button path='/sign-in' buttonStyle='btn--outline'>Sign In</Button>
            : null }
        </div>
      </nav>
    </>
  );
}

export default Navbar;