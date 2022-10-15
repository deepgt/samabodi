import React from 'react'
import './Program_Section.css'

function Program_Section() {
  return (
    <div className='tech-container'>
        <div className='tech-heading'>
         Our Programs
        </div>
        <div className='program-container'>
          <div className='program-card'>
            <img src='./images/program01.png' />
            <div className='program-content01'>
              <h1>Learn Proven Techniques and Practices</h1>
              <button>Start My Journey</button>
            </div>
          </div>

          <div className='program-card'>
            <img src='./images/program02.png' />
            <div className='program-content02'>
              <h1>Experience Powerfully Consecrated Spaces</h1>
              <button>Find out More</button>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Program_Section