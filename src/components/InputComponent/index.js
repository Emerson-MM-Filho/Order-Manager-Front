import React, { useState } from 'react'
import './style.scss'

function InputComponent({type, text, handleChange, inputValue, ...rest}) {
  const [defaultValue, setDefaultValue] = useState(inputValue || '')
  return(
    <input
      type={type}
      placeholder={text}
      className='default-input'
      value={defaultValue}
      onChange={(event) => {
        handleChange(event)
        setDefaultValue(event.target.value)
      }}
      {...rest}
    />
  )
}

export default InputComponent