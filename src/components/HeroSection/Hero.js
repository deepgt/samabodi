import React from 'react'
import { useTranslation } from 'react-i18next';
import './Hero.css';
function Hero() {

  const { t } = useTranslation();


  return (
    <div className='hero-container'>
      <img src='./images/group.png' className='group'/>
      <img src='./images/galaxy.png' className='bg-hero' />
      <img src='./images/rectangle1.png' className='bg-rect1' />
      <img src='./images/rectangle2.png' className='bg-rect2' />
      <div className='hero-text-container'>
        <h1>{t("Creativity~Contemplation~Meditation")}</h1>
        <p>{t("Practical tools for transformation and support of the human Soul.")}</p>
        <button>{t("Discover Your Energy State")}</button>
      </div>
    </div>
  )
}

export default Hero