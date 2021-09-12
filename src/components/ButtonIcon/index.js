import React from 'react'

import './style.scss'

function ButtonIcon({icon, ...rest}) {
  return (
    <button className='button-icon' {...rest}>
      {icon}
    </button>
  )
}

export default ButtonIcon