import React from 'react'
import './AboutMe.css'
import UmichLogo from './assets/Umich.png'

const AboutMe = () => {
  return (
    <div className='about-me'>
        <div className='intro'>
            <img className='profile' src='https://media.licdn.com/dms/image/v2/D5603AQH4tMTM30ECBw/profile-displayphoto-shrink_100_100/B56ZRDxxZUHQAU-/0/1736303909127?e=1746662400&v=beta&t=VXvF1IYxlXsxZGIOr10qsKQSAl_IHc1moaLAwlgqY3U' alt='Image of Me'/>
                <div>
                    <h1>Aayush</h1>
                    <h2>I'm a <span>Full Stack Developer</span></h2>
                </div>
        </div>
        <div className='labels'>
            <div>
                <img src={UmichLogo} alt='Umich Logo'/>
                <p>University of Michigan</p>
            </div>
            <div>
                <i className='fas fa-map-pin'></i>
                <p>MI, United States</p>
            </div>
            <div>
                <img src={UmichLogo} alt='Umich Logo'/>
                <p>University of Michigan</p>
            </div>
            
        </div>
    </div>
  )
}

export default AboutMe
