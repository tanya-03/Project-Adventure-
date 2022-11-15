import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
      <button type="button" class="btn btn-light">Get Started</button>
      <button type="button" class="btn btn-light">Watch Trailer</button>      </div>
    </div>
  );
}

export default HeroSection;
