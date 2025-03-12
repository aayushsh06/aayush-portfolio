import React from 'react'
import '../styles/TechStack.css'

const TechStack = () => {
    return (
        <div className='tech-stack'>
            <h1><i className='fa-solid fa-server'></i>My Tech Stack</h1>
            <div className='items'>
            <div>
                <h2>Languages</h2>
                <div className='languages'>
                    <p><i className='fa-brands fa-java'></i>Java</p>
                    <p><i className='fa-solid fa-c'></i>C++</p>
                    <p><i className='fa-brands fa-python'></i>Python</p>
                    <p><i className='fa-brands fa-js'></i>JavaScript</p>
                    <p><i className='fa-solid fa-database'></i>SQL</p>
                    <p><i className='fa-brands fa-html5'></i>HTML/CSS</p>
                    <p><i className='fa-solid fa-terminal'></i>Bash</p>
                    <p><i className='fa-brands fa-swift'></i>Swift</p>
                </div>
            </div>
            <div>
                <h2>Frameworks/Technologies</h2>
                <div className='frameworks'>
                    <p><i className='fa-solid fa-seedling'></i>Spring Boot</p>
                    <p><i className='fa-brands fa-react'></i>React</p>
                    <p><i className='fa-solid fa-database'></i>Hibernate</p>
                    <p><i className='fa-brands fa-node'></i>Node.js</p>
                    <p><i className='fa-solid fa-flask'></i>Flask</p>

                    <p><i className='fa-solid fa-chart-line'></i>Pandas</p>
                    <p><i className='fa-solid fa-brain'></i>Scikit-learn</p>
                    <p><i className='fa-solid fa-robot'></i>TensorFlow</p>

                    <p><i className='fa-brands fa-git-alt'></i>Git</p>
                    <p><i className='fa-brands fa-linux'></i>Linux</p>

                    <p><i className='fa-solid fa-database'></i>SQLite</p>
                    <p><i className='fa-solid fa-database'></i>PostgreSQL</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default TechStack
