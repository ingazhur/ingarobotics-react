import React from 'react'
import './CenterSection.css';
import {Link} from 'react-router-dom';

const CenterSection = () => {
  return (
    <div className="center-section">
        <h3>What I am up to</h3>
        <div className="center-section-text">
            <p>On campus, 
                I am leading hardware Devices division at <a href="https://neurotech.berkeley.edu/">Neurotech@Berkeley</a>, 
                organizing the largest collegiate hackathon <a href="https://calhacks.io/">Cal Hacks</a>, 
                and fostering machine learning community and events 
                as a part of the external relations team at <a href="https://ml.berkeley.edu/">ML@B</a>. 
                I am working on speech synthesis BCIs at <a href="https://bair.berkeley.edu/">Berkeley Artificial Intelligence (BAIR)</a> lab, 
                in Berkeley Speech Group.
            </p>
        </div>
        <div className="my-projects-btn">
            <button type="button"><Link to="/projects">my projects</Link></button>
        </div>
    </div>
  )
}

export default CenterSection;