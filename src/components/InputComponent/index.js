import React from 'react'
import './style.scss'

function InputComponent({type, text, ...rest}) {
  return(
    <input type={type} placeholder={text} className='default-input' {...rest}/>
  )
}

export default InputComponent