import React from 'react'
import './Wisdom.css'

function Wisdom() {
  return (
    <div className='wisdom-container'>
        <img src="./images/wisdombg.png"/>
        <img className='wisdom_chakra' src="./images/_red-muladhara-chakra-root-mandala-esoteric_26842798_detail 1.png" />
        <img className='wisdom_XMLID' src="./images/XMLID_952_.png" />
        <img className='wisdom_chakra_mandala' src="./images/_red-muladhara-chakra-root-mandala-esoteric_26842798_detail 2.png" />
        <h1>Latest Wisdom from sama bodhi</h1>
        <p>VIEW ALL ARTICALS</p>
        <div className='wisdom-card-container'>
          <div className='wisdom-card'>
            <img src='./images/widomcard01.png'/>
            <div className='date'>
              <p>Aug 5 2022</p>
              <img src='./images/Playbutton.png' />
            </div>
            <h2>How Sadhguru Inspired Volunteers to Turn a Barren Mountain Green</h2>
            <p>In a candid interaction with volunteers during the India leg of the Save Soil journey, Sadhguru explains how he inspired volunteers to plant trees in the barren Velliangiri Mountains near the Isha Yoga Center, and the simple yet ....</p>
          </div>

          <div className='wisdom-card'>
            <img src='./images/widomcard01.png'/>
            <div className='date'>
              <p>Aug 5 2022</p>
              <img src='./images/Playbutton.png' />
            </div>
            <h2>How Sadhguru Inspired Volunteers to Turn a Barren Mountain Green</h2>
            <p>In a candid interaction with volunteers during the India leg of the Save Soil journey, Sadhguru explains how he inspired volunteers to plant trees in the barren Velliangiri Mountains near the Isha Yoga Center, and the simple yet ....</p>
          </div>

        </div>
    </div>
  )
}

export default Wisdom