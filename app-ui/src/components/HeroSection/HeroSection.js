import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import './HeroSection.css';

export const HeroSection = (props) => {
  return (
    <div className='hero-container'>
      {props.img ? <img alt='' className="hero-image" src={props.img} /> : null}
      {props.video ? <video src={props.video} autoPlay loop muted/> : null}
      <p>All you need is</p>
      <h1>Love And A Cat</h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          path='/trailer'
        >
          Watch Trailer <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}
