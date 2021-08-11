import React from 'react'
import './style.scss'

function DefaultButton({icon, text, handleClick}) {
  return(
    <button onClick={handleClick} className='default-button'>
      {icon}
      {text}
    </button>
  )
}

export default DefaultButton