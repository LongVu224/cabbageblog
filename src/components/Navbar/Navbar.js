import React, { useState, useEffect } from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    if(props.token.data.length > 0) {
      setIsLogged(true)
    }
  }, [props.token.data]);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
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
            <li className='nav-item'>
              <Link
                to='/info'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Info
              </Link>
            </li>
            {isLogged ? 
              <li className='nav-welcome'>
                Welcome back, meow
              </li>
            : null}

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
            <Button path='/sign-in' buttonStyle='btn--outline'>SIGN IN</Button>
            : null }
        </div>
      </nav>
    </>
  );
}

export default Navbar;