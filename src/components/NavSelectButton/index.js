import React from 'react';
import './style.scss'
import { selectArrowIcon } from '../../icons'

function NavSelectButton({ icon, text }) {
  return (
    <div className="nav-select">
      <span className="nav-select-icon">{ icon }</span>
      <p className="nav-select-text">{ text }</p>
      <span className="nav-select-arrow">{ selectArrowIcon }</span>
    </div>
  )
}

export default NavSelectButton