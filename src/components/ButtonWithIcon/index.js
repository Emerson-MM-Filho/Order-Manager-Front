import React from 'react'

import './style.scss'

function ButtonWithIcon({icon}) {
  return (
    <button className='button-with-icon'>
      {icon}
    </button>
  )
}

export default ButtonWithIcon