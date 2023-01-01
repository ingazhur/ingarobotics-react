import React, {useState} from 'react'
import './ProjectCard.css';
import PopUp from './PopUp';

const ProjectCard = ({title, tags, description, fullDescriptionPath, img}) => {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="card-content">
        <img src={img} alt={title} />
        <div>
            <a onClick={togglePopup}>
                <h6>{title}</h6>
            </a>
            {isOpen && <PopUp
            contentFile={fullDescriptionPath}
            handleClose={togglePopup}
            />}
        </div>

        <p>{description}</p>
        <div className="tags">
            <p>tags:</p>
            {tags.map((tag, index) => (
                <p key={index}>{tag}</p>
            ))}
        </div>
    </div>
  )
}

export default ProjectCard;