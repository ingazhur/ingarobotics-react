import React, {useState} from 'react'
import './Projects.css';

import Select from 'react-select';

const ProjectsIntro = () => {
  const options = [
    { backgroundColor: '#642D24', textColor: '#F5DFD3', value: 'all', label: 'all' },
    { backgroundColor: '#463B60', textColor: '#FEF6FE', value: 'personal project', label: 'personal project' },
    { backgroundColor: '#334737', textColor: '#BAE5C6', value: 'neurotech', label: 'neurotech' },
    { backgroundColor: '#4D4021', textColor: '#FFFABC', value: 'software', label: 'software' },
    { backgroundColor: '#442932', textColor: '#FDE6FB', value: 'hardware', label: 'hardware' },
    { backgroundColor: '#593727', textColor: '#DAC5AC', value: 'hackathon project', label: 'hackathon project' },
    { backgroundColor: '#324150', textColor: '#D3EBEC', value: 'class project', label: 'class project' }
  ]

  const customStyles = {
    control: (defaultStyles) => ({
        ...defaultStyles,
        backgroundColor: "#404040",
        borderRadius: 5,
        padding: "5px",
        border: "1px, #a0a0a0",
        boxShadow: "none",
    }),

    option: (defaultStyles, state) => ({
        ...defaultStyles,
        color: state.data.textColor,
        backgroundColor: state.data.backgroundColor,
        borderRadius: 5,
        alignItems: "center",
        width: "fit-content",
        margin: "2px 2px 2px",
        ":hover": {
            backgroundColor: state.isSelected ? state.data.value : "#a0a0a0",
            color: state.isSelected ? "#404040" : "#fff",
        },
    }),

    singleValue: (defaultStyles) => ({
        ...defaultStyles,
        padding: "5px 10px",
        borderRadius: 5,
        backgroundColor: selectedOption,
        color: "white",
        display: "flex",
        width: "fit-content",
      }),
  };

  const [selectedOption, setSelectedOption] = useState("");

  var handleChange = (selectedOption) => {
    console.log(selectedOption);
    setSelectedOption(selectedOption.value);
  };

  return (
    <div className="projects-intro">
        <h3>A directory of my personal and team projects.</h3>
        <div className="drop-down-menu">
            <Select 
                isMulti 
                onChange={handleChange} 
                options={options} 
                styles={customStyles} 
                defaultValue={[options[0]]}
            />
        </div>
    </div>
  )
}

export default ProjectsIntro;