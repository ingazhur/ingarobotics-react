import React, {useState, useEffect} from 'react';
import './Projects.css';
import PostPreview from './PostPreview';
import projects_json from "../content/projects.json";

const ProjectsGrid = (selected_tags) => {

  return (
    <div className="projects-grid">
        {projects_json.map((project, index) => (
            <PostPreview 
                key={index} 
                title={project.title} 
                tags={project.tags} 
                description={project.description} 
                img={project.img} 
            />
        ))}
    </div>
  )
}

export default ProjectsGrid;