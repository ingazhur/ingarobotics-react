import React, {useState, useEffect} from 'react';
import './Projects.css';
import PostPreview from './PostPreview';
import projects_json from "../content/projects.json";

const FeaturedProjectsGrid = (selected_tags) => {
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
    <div className="projects-grid">
      {projects.map((project, index) => (
        <PostPreview key={index} title={project.title} tags={project.tags} description={project.description} img={project.img} />
      ))}
    </div>
  )

}

export default FeaturedProjectsGrid;