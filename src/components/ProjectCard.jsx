import '../styles/ProjectCard.css'
import { Link } from 'react-router-dom';

function ProjectCard({ projectId, projectName, date, projectImage, githubLink, demoLink, techStack }) {
  return (
    <Link to={`/aayush-portfolio/projects/${projectId}`} style={{ textDecoration: 'none' }}>
      <div className="project-card">
        <div className="project-image-container">
          <img src={projectImage} alt={projectName} className="project-image" />
        </div>
        <div className="project-content">
          <h3 className="project-title">{projectName}</h3>
          <p className="project-date">{date}</p>
          <div className="project-links">
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link" onClick={e => e.stopPropagation()}>
              GitHub
            </a>
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-link" onClick={e => e.stopPropagation()}>
                Live Demo
              </a>
            )}
          </div>
          <div className="tech-stack">
            {techStack}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
