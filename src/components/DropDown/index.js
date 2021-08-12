import React from 'react'
import './style.scss'

import { Link } from 'react-router-dom'

function Dropdown({options}) {
  return (
    <div className='nav-dropdown' data-testid='nav-dropdown-open-container'>
      {options.map(({name, link}) => <Link to={link} className='nav-dropdown-item' key={link} data-testid='nav-dropdown-redirect-link'>{name}</Link>)}
    </div>
  )
}

export default Dropdown