import React, {useState} from 'react'
import ReactHtmlParser from 'react-html-parser';
import PopUp from './PopUp';
import './PostPreview.css';
import colors from "../content/colors.json";

const setTagBackgroundColor = (tag) => {
    tag = tag.toString();
    return colors[tag] ? colors[tag].backgroundColor : "#424242";
}

const setTagColor = (tag) => {
    tag = tag.toString();
    return colors[tag] ? colors[tag].textColor: "#FFFFFF";
}

const setBorderTagColor = (tag) => {
    tag = tag.toString();
    return colors[tag] ? colors[tag].borderColor: "#BEBCBC";
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
        { ReactHtmlParser (description) }
        <div className="tags">
            {tags && tags.filter(tag => tag !== "featured" && tag !== "all projects").map((tag, index) => (
                <div className="tag" key={index} 
                    style={{
                        backgroundColor: setTagBackgroundColor(tag), 
                        color: setTagColor(tag),
                        borderRadius: "2px",
                        display: "flex",
                        width: "fit-content",fontSize: "0.9rem"}}>
                    {tag}
                </div>
            ))}
        </div>
    </div>
  )
}

export default PostPreview;