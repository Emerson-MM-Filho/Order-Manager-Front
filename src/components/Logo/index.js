import React from 'react'
import './style.scss'

function Logo() {
  return (
    <div className='header-logo-area'>
      <svg width="57" height="40" viewBox="0 0 57 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35.0028 11.9499L43.8572 2.29053L54.5228 23.6216H11.0557" stroke="white"/>
        <path d="M21.5199 28.0486L12.6655 37.708L1.99994 16.3769L45.467 16.3769" stroke="white"/>
      </svg>
      <h1 className='header-logo'>AMPULLA</h1>
    </div>
  )
}

export default Logo