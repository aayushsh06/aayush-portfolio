import '../styles/ProjectCard.css'

function ProjectCard({ projectName, date, projectImage, githubLink, demoLink, techStack }) {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={projectImage} alt={projectName} className="project-image" />
      </div>
      <div className="project-content">
        <h3 className="project-title">{projectName}</h3>
        <p className="project-date">{date}</p>
        <div className="project-links">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
            GitHub
          </a>
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
              Live Demo
            </a>
          )}
        </div>
        <div className="tech-stack">
          {techStack}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
