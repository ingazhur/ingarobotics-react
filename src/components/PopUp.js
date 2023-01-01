import React, {useState, useEffect} from "react";
import "./PopUp.css";
import ReactMarkdown from 'react-markdown'
 
const PopUp = props => {
  const [contentFile, setContent] = useState("");

    useEffect(() => {
        fetch(props.contentFile)
            .then(response => response.text())  
            .then(text => setContent(text))
    }, [props.contentFile]);
  
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <ReactMarkdown children={contentFile} />
      </div>
    </div>
  );
};
 
export default PopUp;