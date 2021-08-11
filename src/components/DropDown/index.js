import React from 'react'
import './style.scss'

import { Link } from 'react-router-dom'

function Dropdown({options}) {
  return (
    <div className='nav-dropdown'>
      {options.map(({name, link}) => <Link to={link} className='nav-dropdown-item'>{name}</Link>)}
    </div>
  )
}

export default Dropdown