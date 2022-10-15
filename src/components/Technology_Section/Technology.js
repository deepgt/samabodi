import React from 'react'
import './Technology.css'
import { useTranslation } from 'react-i18next';

function Technology() {
  const { t } = useTranslation();
  return (
    <div className='tech-container'>
        <div className='tech-heading'>
          {t("Technologies for wellbeing")}
        </div>
        <div className='card-container'>
          <div className='tech-card'>
            <img src='./images/technology04.png' />
            <h1>Learn Proven Techniques and Practices</h1>
            <button>Start My Journey</button>
          </div>
          <div className='tech-card'>
            <img src='./images/technology02.png' />
            <h1>Take Part in Volunteering</h1>
            <button>Get involved</button>
          </div>
          <div className='tech-card'>
            <img src='./images/technology01.png' />
            <h1>Expreience Powerfully Consecrated Spaces</h1>
            <button>Find out More</button>
          </div>
          <div className='tech-card'>
            <img src='./images/technology03.png' />
            <h1>Explore Knownledge</h1>
            <button>Explore</button>
          </div>
        </div>
    </div>
  )
}

export default Technology