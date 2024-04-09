import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className='heroImage'>
        <div className='hero__text'>
            <h4 className='hero__h4'>Contact Us</h4>
            <p><a href="/index.html" className='hero__Homelink'>Home</a> | Contact Us</p>
        </div>
    </div>
  )
}

export default Hero