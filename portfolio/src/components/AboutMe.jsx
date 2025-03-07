import React from 'react'
import '../styles/AboutMe.css'
import UmichLogo from '../assets/Umich.png'
import { useState, useEffect } from 'react'

const AboutMe = () => {

    const list = ['Full Stack Developer', 'Student', 'Software Engineer']

    const [text, setText] = useState(list[0]);
    const [index, setIndex] = useState(0);
    const [currElem, setCurrElem] = useState('');
    const [dir, setDir] = useState('Forward');

    useEffect(() => {
        const handleTextUpdate = () => {
            if (dir === 'Forward' && index < text.length) {
                setCurrElem(prev => prev + text.charAt(index));
                setIndex(prevIndex => prevIndex + 1);
    
                if (index + 1 === text.length) {
                    setTimeout(() => {
                        setDir('Backward');
                    }, 1000);
                }
            } else if (dir === 'Backward' && index > 0) {
                setCurrElem(prev => prev.slice(0, -1));
                setIndex(prevIndex => prevIndex - 1);
    
                if (index === 1) {
                    setTimeout(() => {
                        setText(list[(list.indexOf(text) + 1) % list.length]);
                        setDir('Forward');
                    }, 200);
                }
            }
        };
    
        const intervalId = setInterval(handleTextUpdate, 100);
    
        return () => clearInterval(intervalId); 
    }, [index, text, dir, list]);



    return (
        <div className='about-me'>
            <div className='intro'>
                <img className='profile' src='https://media.licdn.com/dms/image/v2/D5603AQH4tMTM30ECBw/profile-displayphoto-shrink_100_100/B56ZRDxxZUHQAU-/0/1736303909127?e=1746662400&v=beta&t=VXvF1IYxlXsxZGIOr10qsKQSAl_IHc1moaLAwlgqY3U' alt='Image of Me' />
                <div>
                    <h1>Aayush</h1>
                    <h2>I'm a <span className='trait'>{currElem}<span className='cursor'>|</span></span></h2>
                </div>
            </div>
            <div className='labels'>
                <div>
                    <img src={UmichLogo} alt='Umich Logo' />
                    <p>University of Michigan</p>
                </div>
                <div>
                    <i className='fas fa-laptop-code'></i>
                    <p>Computer Science</p>
                </div>
                <div>
                    <i className='fas fa-graduation-cap'></i>
                    <p>Class of 2027</p>
                </div>
                <div>
                    <i className='fas fa-map-pin'></i>
                    <p>MI, United States</p>
                </div>
                <div>
                    <i className='fas fa-flask'></i>
                    <p>Researcher</p>
                </div>
                <div>
                    <i className='fas fa-cogs'></i>
                    <p>Open Source Contributor</p>
                </div>

            </div>
            <div className='connect'>
                <h2>Let's Connect</h2>
                <div className='connection-forms'>
                    <a href='https://www.linkedin.com/in/aayushksharma' target='_blank'><i id='linkedIn' className='fa-brands fa-linkedin'></i>LinkedIn</a>
                    <a href='https://github.com/aayushsh06' target='_blank'><i className='fa-brands fa-github'></i>GitHub</a>
                    <a href='mailto:aayushksharma2006@gmail.com'><i className="fa-solid fa-envelope"></i>Email</a>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
