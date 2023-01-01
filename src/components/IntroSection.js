import React from 'react'

import './IntroSection.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';

const IntroSection = () => {
  return (
    <div className="intro-section">
        <div className="intro-image">
            <img src="../../imgs/me.png"/>
        </div>
        <div className="intro-text">
            <p>Hi! My name is Inga, and I am a junior at UC Berkeley studying Electrical Engineering & Computer Science. I am a hardware hacker curious about wearable devices, machine learning, and the future of human-computer interaction using brain-computer interfaces.</p>
            <div className="social-icons">
              <a href="https://github.com/ingazhur" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/inga-zhuravleva/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://twitter.com/ingarobotics" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
        </div>
        
    </div>
  )
}

export default IntroSection;