import React from 'react'

import './style.scss'

function ButtonIcon({icon, color, ...rest}) {
  return (
    <button className={`button-icon ${color}`} {...rest}>
      {icon}
    </button>
  )
}

export default ButtonIcon