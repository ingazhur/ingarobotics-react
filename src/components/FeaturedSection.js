import React, {useState, useEffect} from 'react'
import './FeaturedSection.css';
import {Link} from 'react-router-dom';
import PostPreview from './PostPreview';
import './Projects.css';
import projects_json from "../content/projects.json";

function FeaturedSection() {
  const selected_tags = ["featured"];
  const [projects, setProjects] = useState(projects_json);

  useEffect(() => {
    if (selected_tags.length > 0) {
      setProjects(projects_json.filter(project => {
        return project.tags.some(tag => selected_tags.includes(tag));
      }));
    } else {
      setProjects(projects_json);
    }
  }, [selected_tags]);

  return (
    <div className="featured-section">
        <h3>Featured projects</h3>
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
        <div className="more-projects">
            <Link to="/projects" target="_blank">
                <h5>more projects</h5>
                <i className="fa fa-external-link" aria-hidden="true"></i> 
            </Link>
        </div>

    </div>
  )
}

export default FeaturedSection;