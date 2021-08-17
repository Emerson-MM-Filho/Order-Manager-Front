import React from 'react'
import './style.scss'


function SelectInput({options, ...rest}) {
  return (
    <select className='default-select' {...rest}>
      {options.map(({value, label}) => <option value={value} key={value}>{label}</option>)}
    </select>
  )
}

export default SelectInput