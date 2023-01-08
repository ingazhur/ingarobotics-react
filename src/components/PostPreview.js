import React, {useState} from 'react'
import PopUp from './PopUp';
import './PostPreview.css';

const setTagColor = (tag) => {
  switch (tag) {
      case 'personal project':
          return '#453061';
      case 'neurotech':
          return '#304469';
      case 'software':
          return '#385841';
      case 'hardware':
          return '#836534';
      case 'hackathon project':
          return '#7E4F27';
      case 'class project':
          return '#642D24';
      default:
          return '#000000';
  }
}

const PostPreview = ({title, tags, description, img}) => {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="card-content">
        <img src={img} alt={title} />
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="tags">
            {tags.map((tag, index) => (
                <p key={index}>{tag}</p>
            ))}
        </div>
    </div>
  )
}

export default PostPreview;