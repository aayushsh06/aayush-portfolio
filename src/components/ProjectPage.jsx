import React from 'react'

const ProjectPage = (name, image, description, techStack, githubLink, demoLink) => {
  return (
    <div>
      <h1>Project Page</h1>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{description}</p>
      <p>{techStack}</p>
      <a href={githubLink}>GitHub</a>
      <a href={demoLink}>Demo</a>
      <button onClick={() => window.location.href = githubLink}>GitHub</button>
      <button onClick={() => window.location.href = demoLink}>Demo</button>
      <button onClick={() => window.location.href = 'https://github.com/aayushsh06'}>GitHub</button>
      <button onClick={() => window.location.href = 'https://github.com/aayushsh06'}>GitHub</button>
    </div>
  )
}

export default ProjectPage
