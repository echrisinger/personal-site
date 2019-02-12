import React, { PureComponent } from 'react';
import './AboutMe.css';
import meImg from './icons/me.png';
import OutsideLinks from './OutsideLinks';

export default class componentName extends PureComponent {
  render() {
    return (
      <div>
        <div className='section-container'>
          <div className='personal-photo-container'>
            <hr/>
            <div className='img-container'>
              <img src={meImg} alt='Image of Evan!'/>
            </div>
            <hr/>
          </div>
        </div>
        <div className='about-me-flex-container'>
          <div className='section-container'>
            <div className='section-title'><t3>Suh dude!</t3></div>
            <div className='about-me-container'>
              <p>
                My name is Evan.<br/>
                I'm a backend engineer @ Transfix in NYC.<br/>
                Outside of work I surf, ski, travel & adventure whenever I can.<br/>
              </p>
            </div>
          </div>
          <OutsideLinks/>
        </div>
      </div>
    )
  }
}
