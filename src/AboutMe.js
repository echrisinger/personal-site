import React, { PureComponent } from 'react';
import './AboutMe.css';
import meImg from './icons/me.png';

export default class componentName extends PureComponent {
  render() {
    return (
      <div>
        <div className='section-container'>
          <div className='img-container'>
            <img src={meImg} alt='Image of Evan!'/>
          </div>
        </div>
        <div className='section-container'>
          <div className='section-title'><t3>Howdy!</t3></div>
          <div className='about-me-container'>
            <p>
              My name is Evan.<br/>
              I'm a backend engineer @ Transfix in NYC.<br/>
              Outside of work I surf, ski, travel & adventure.<br/>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
