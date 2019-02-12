import React, { PureComponent } from 'react';
import githubLogo from './icons/github.svg';
import linkedinLogo from './icons/linkedin.svg';
import mediumLogo from './icons/medium.svg';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer">
        <a
          className="footer-link"
          href="https://github.com/echrisinger"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} alt="github"/>
        </a>
        <a
          className="footer-link"
          href="https://linkedin.com/in/echrisinger"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinLogo} alt="linkedin"/>
        </a>
        <a
          className="footer-link"
          href="https://medium.com/@evanchrisinger"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={mediumLogo} alt="medium"/>
        </a>
      </footer>
    )
  }
}

export default Footer;
