import React, { useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Button } from '../Button';

const Footer = (props) => {

  const [email, setEmail] = useState('')

  const handleSubcribe = (e) => {
    e.preventDefault();
    props.onEmailSubcribe({email: email})
    props.openModal();
  }

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Cabbage Gang to receive our newsletter.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              onChange={(e) => setEmail(e.target.value)} 
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <div className="footer-btn">
              <Button 
                onClick={handleSubcribe}
                buttonStyle='btn--outline'>
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/coming'>How it works</Link>
            <Link to='/coming'>Testimonials</Link>
            <Link to='/coming'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Me</h2>
            <Link to='/contact'>Contact</Link>
            <Link to='/coming'>Support</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
        <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/trailer'>Trailer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.instagram.com/bapcai.thetattooboi/'>Instagram</a>
            <a href='https://my-portfolio-886e5.web.app/'>Dad's Portfolio</a>
            <a href='https://www.linkedin.com/in/trang-h-ta-488334196/'>Mom's LinkedIn</a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Cabbage 
              <i className='fas fa-paw' />
            </Link>
          </div>
          <small className='website-rights'>© Copyright 2021 Cabbage</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/coming'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <a
              className='social-icon-link instagram'
              href='https://www.instagram.com/bapcai.thetattooboi/'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>
            <Link
              className='social-icon-link youtube'
              to='/coming'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/coming'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <a
              className='social-icon-link twitter'
              href='https://www.linkedin.com/in/longvu224/'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;