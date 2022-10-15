import React, {useState} from 'react'
import './Navbar.css'
import { useTranslation } from 'react-i18next';
function Navbar() {

  const { t } = useTranslation();
  const { i18n } = useTranslation();

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <>
    <div className='nav'>
        <div className='nav-logo'>
            <img src='../images/sama_bodhilogo.png' />
            <h1>समबोधि</h1>
        </div>
        <div className='nav-menu'>
            <div className='nav-links'>{t('Home')}</div>
            <div className='nav-links'>{t('Events')}</div>
            <div className='nav-links'>{t('Outreach')}</div>
            <div className='nav-links'>{t('Yoga & Meditation')}</div>
            <button className='lang' onClick={changeLanguage} value='en'>EN</button>
            <div className='line'></div>
            <button className='lang' onClick={changeLanguage} value='es'>NP</button>
        </div>  
    </div>
    </>
  )
}

export default Navbar