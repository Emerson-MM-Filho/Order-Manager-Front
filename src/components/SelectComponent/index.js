import React, { useState } from 'react'
import './style.scss'


function SelectInput({options, selectedValue, handleChange, ...rest}) {
  const [defaultValue, setDefaultValue] = useState(selectedValue)
  return (
    <select
      className='default-select'
      value={defaultValue}
      onChange={(event) => {
        handleChange(event)
        setDefaultValue(event.target.value)
      }}
      {...rest}
    >
      {options.map(({value, label}) => <option value={value} key={value}>{label}</option>)}
    </select>
  )
}

export default SelectInput