import React, { PureComponent } from 'react';
import githubLogo from './icons/github.svg';
import linkedinLogo from './icons/linkedin.svg';
import mediumLogo from './icons/medium.svg';
import './OutsideLinks.css';

class OutsideLinks extends PureComponent {
  render() {
    return (
      <div className="social-links-container">
        <a
          className="social-link"
          href="https://github.com/echrisinger"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} alt="github"/>
        </a>
        <a
          className="social-link"
          href="https://linkedin.com/in/echrisinger"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinLogo} alt="linkedin"/>
        </a>
        <a
          className="social-link"
          href="https://medium.com/@evanchrisinger"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={mediumLogo} alt="medium"/>
        </a>
      </div>
    )
  }
}

export default OutsideLinks;