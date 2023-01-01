import React from 'react'
import './IntroSection.css';

const IntroSection = () => {
  return (
    <div className="intro-section">
        <div className="intro-image">
            <img src="../../imgs/me.png"/>
        </div>
        <div className="intro-text">
            <p>Hi! My name is Inga, and I am a junior at UC Berkeley studying Electrical Engineering & Computer Science. I am a hardware hacker curious about wearable devices, machine learning, and the future of human-computer interaction using brain-computer interfaces.</p>
        </div>
    </div>
  )
}

export default IntroSection;