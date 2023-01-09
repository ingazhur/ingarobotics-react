import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import PostPreview from './PostPreview';
import './Projects.css';
import projects_json from "../content/projects.json";

var selected_tags = [];

const options = [
    { borderColor: '#6AAADF', backgroundColor: '#304469', textColor: '#D3EBEC', value: 'all projects', label: 'all projects' },
    { borderColor: '#9F9FF8', backgroundColor: '#453061', textColor: '#FEF6FE', value: 'personal projects', label: 'personal projects' },
    { borderColor: '#80CE93', backgroundColor: '#385841', textColor: '#D7DDD9', value: 'neurotech', label: 'neurotech' },
    { borderColor: '#F2C45D', backgroundColor: '#836534', textColor: '#FFFABC', value: 'software', label: 'software' },
    { borderColor: '#6AAADF', backgroundColor: '#304469', textColor: '#D3EBEC', value: 'firmware', label: 'firmware' },
    { borderColor: '#ED9AB6', backgroundColor: '#62344B', textColor: '#FDE6FB', value: 'hardware', label: 'hardware' },
    { borderColor: '#EF8452', backgroundColor: '#7E4F27', textColor: '#E5DBD4', value: 'computer vision', label: 'computer vision' },
    { borderColor: '#BEBCBC', backgroundColor: '#424242', textColor: '#FFFFFF', value: 'C/C++', label: 'C/C++' },
    { borderColor: '#BEBCBC', backgroundColor: '#424242', textColor: '#FFFFFF', value: 'Python', label: 'Python' },
    { borderColor: '#BEBCBC', backgroundColor: '#424242', textColor: '#FFFFFF', value: 'Raspberry Pi', label: 'Raspberry Pi' },
    { borderColor: '#BEBCBC', backgroundColor: '#424242', textColor: '#FFFFFF', value: 'Arduino', label: 'Arduino' },
    { borderColor: '#EF8452', backgroundColor: '#7E4F27', textColor: '#E5DBD4', value: 'hackathon projects', label: 'hackathon projects' },
    { borderColor: '#DF3D30', backgroundColor: '#642D24', textColor: '#F5DFD3', value: 'class projects', label: 'class projects' },
    { borderColor: '#6AAADF', backgroundColor: '#304469', textColor: '#D3EBEC', value: 'featured', label: 'featured' },
]





const customStyles = {
    control: (defaultStyles) => ({
        ...defaultStyles,
        backgroundColor: "#272626",
        borderRadius: 5,
        padding: "5px",
        border: "1px, #a0a0a0",
        boxShadow: "none",
    }),

    option: (defaultStyles, state) => ({
        ...defaultStyles,
        color: state.isSelected ? "#212529" : "#fff",
        backgroundColor: state.isSelected ? "#a0a0a0" : "#404040",

        ":hover": {
            ...defaultStyles[":hover"],
            backgroundColor: "#a0a0a0",
        },

        //color: state.data.textColor,
        //backgroundColor: state.data.backgroundColor,
        //borderRadius: 5,
        //width: "fit-content",
        //margin: "2px 2px 2px",
        //borderLeft: `4px solid ${state.data.borderColor}`,
    }),

    multiValue: (defaultStyles, state) => ({
        ...defaultStyles,
        backgroundColor: state.data.backgroundColor,
        borderLeft: `4px solid ${state.data.borderColor}`,
        borderRightRadius: 5,
        display: "flex",
        width: "fit-content",
    }),

    multiValueLabel: (defaultStyles, state) => ({
        ...defaultStyles,
        color: state.data.textColor,
        fontSize: "0.9rem",
    }),
};

var selected_tags = ["all projects"];

const ProjectsIntro = () => {
    const [selectedOption, setSelectedOption] = useState("all projects")
    const [projects, setProjects] = useState(projects_json);

    var handleChange = (selectedOption) => {
        setSelectedOption(selectedOption.value);
        selected_tags = [];
        for (var i = 0; i < selectedOption.length; i++) {
            selected_tags.push(selectedOption[i].value);
        }

        var filtered_projects = [];
        for (var i = 0; i < projects_json.length; i++) {
            var project = projects_json[i];
            var project_tags = project.tags;
            var match = true;
            for (var j = 0; j < selected_tags.length; j++) {
                var tag = selected_tags[j];
                if (!project_tags.includes(tag)) {
                    match = false;
                    break;
                }
            }
            if (match) {
                filtered_projects.push(project);
            }
        }
        setProjects(filtered_projects);
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
        <div className="projects-grid">
            {projects.map((project, index) => (
                <PostPreview 
                    key={index} 
                    title={project.title} 
                    tags={project.tags} 
                    description={project.description} 
                    img={project.img} 
                />
            ))}
        </div>
    </div>
  )
}

export default ProjectsIntro;