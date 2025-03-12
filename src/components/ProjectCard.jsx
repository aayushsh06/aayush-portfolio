import React from 'react'
import '../styles/ProjectCard.css'

const ProjectCard = ({projectName, date, projectImage, githubLink, demoLink, techStack}) => {
  return (
    <div className='project-card'>  
      <h1>{projectName}</h1>
      <h2>{date}</h2>
      <img src={projectImage} alt={`Image of ${projectName}`}></img>
      <div className='tech-stack-used'>
        {techStack}
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum velit ut reiciendis? Perferendis facilis magni officiis inventore totam eveniet, excepturi est accusantium aperiam voluptatibus obcaecati blanditiis modi labore dignissimos debitis?</p>
      <div className='links'>
        <div className='github'>
            <a href={githubLink} target='_blank'><i className='fa-brands fa-github'></i>GitHub</a>
        </div>
        {demoLink && <div className='demo'> 
            <a href={demoLink} target='_blank'><i className='fas fa-eye'></i>Demo</a>
        </div>
            }
      </div>
    </div>
  )
}

export default ProjectCard
