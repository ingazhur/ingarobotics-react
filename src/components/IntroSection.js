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
            <p>Hi! My name is Inga, and I am engineering devices for reversible cryopreservation at Cradle. 
              Previously, I've researched speech neuroprostheses at Berkeley Speech Group and Chang Lab at UCSF and 
              led the hardware development for non-invasive neural interfaces at Berkeley's neurotech club. 
              I am interested in BCIs for restoration and augmentation of sensory inputs.
              </p>
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