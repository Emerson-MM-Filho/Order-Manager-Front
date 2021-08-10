import React from 'react'

import './style.scss'

function ButtonIcon({icon}) {
  return (
    <button className='button-icon'>
      {icon}
    </button>
  )
}

export default ButtonIcon