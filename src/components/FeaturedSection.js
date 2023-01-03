import React from 'react'
import './FeaturedSection.css';
import {Link} from 'react-router-dom';
import PostPreview from './PostPreview';

/*
const robot1 = {
    title: "Delivery robot",
    tags: ["hackathon project", "software"],
    description: "Remote-controlled robot with object-grasping capabilities",
    img: "../../imgs/robot1.gif"
}
*/

function FeaturedSection() {
  return (
    <div className="featured-section">
        <h3>Featured projects</h3>
        <div className="cards">
            <PostPreview
                title="NFC contact card"
                tags={["hardware"]}
                description="Contact PCB card with NFC chip and an LED"
                img="../../imgs/contact-card.jpg"
            />
            <PostPreview
                title="Cansat"
                tags={["team project", "hardware", "software"]}
                description="1 kg version of an atmospheric probe with sensors and a custom-designed spectrometer"
                img="../../imgs/cansat2018.jpg"
            />
            <PostPreview
                title="Delivery robot"
                tags={["hackathon project", "software"]}
                description="Remote-controlled robot with object-grasping capabilities"
                img="../../imgs/robot1.gif"
            />
            


        </div>
        
        <div className="more-projects">
            <Link to="/projects">
                <h5>more projects</h5>
                <i class="fa fa-external-link" aria-hidden="true"></i> 
            </Link>
        </div>

    </div>
  )
}

export default FeaturedSection;