import React, { useState } from 'react';
import './style.scss'
import { selectArrowIcon } from '../../icons'
import Dropdown from '../DropDown';

function NavSelectButton({ icon, text, options }) {
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <div className="nav-select" onClick={() => setOpen(!open)}>
        <span className="nav-select-icon">{ icon }</span>
        <p className="nav-select-text">{ text }</p>
        <span className="nav-select-arrow">{ selectArrowIcon }</span>
      </div>
      {open && <Dropdown options={options}/>}
    </nav>
  )
}

export default NavSelectButton