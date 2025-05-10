import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import projects from './projectsData';
import '../styles/ProjectPage.css';

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    navigate('/aayush-portfolio', { replace: false });
    setTimeout(() => {
      const element = document.querySelector('.projects-section');
      if (element) {
        const nav = document.querySelector('.navbar');
        const yOffset = nav ? -nav.offsetHeight : 0;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50);
  };

  if (!project) return <div>Project not found</div>;

  return (
    <div className="project-detail-container">
      <div className="project-detail-header">
        <button onClick={handleBackClick} className="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Projects
        </button>
      </div>
      <img src={project.image} alt={project.name} className="project-detail-image" />
      <div className="project-detail-title">{project.name}</div>
      <div className="project-detail-dates">{project.dates}</div>
      <div className="project-detail-description">{project.description}</div>
      <div className="project-detail-tech">
        {project.techStack.map((tech, idx) => (
          <span className="project-detail-tech-tag" key={idx}>{tech}</span>
        ))}
      </div>
      <div className="project-detail-links">
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-detail-link">GitHub</a>
        {project.demoLink && (
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-detail-link">Demo</a>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;