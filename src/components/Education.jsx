import React from 'react'
import '../styles/Education.css'
import UmichLogo from '../assets/Umich.png'

const Education = () => {
  return (
    <div className="education-section">
      <div className="education-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
        </svg>
        <h2>Education</h2>
      </div>
      <div className="horizontal-line"></div>
      <div className="education-grid">
        <div className="education-card">
          <div className="education-school">University of Michigan</div>
          <div className="education-degree">Bachelor of Science in Engineering in Computer Science</div>
          <div className="education-dates">2024 - 2027</div>
          <div className="education-details">
            <ul>
              <li>GPA: 4.0</li>
              <li>Relevant Coursework: Data Structures & Algorithms, Computer Organization & Architecture, Web Systems, Practical Data Science, Software Engineering</li>
              <li>Dean's List: Fall 2024, Winter 2025</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
