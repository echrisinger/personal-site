import React, { PureComponent } from 'react';
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <header className='header'>
        <t1>Evan Chrisinger</t1>
        <p className='brief'>Software Engineer</p>
      </header>
    )
  }
}

export default Header;
