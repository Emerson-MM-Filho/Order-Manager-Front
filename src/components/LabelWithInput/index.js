import React from 'react'
import './style.scss'

import InputComponent from '../InputComponent'

function LabelWithInput({type, label, text, addClass, inputValue, ...rest}) {
  return(
    <label className={`label-with-input ${addClass}`}>
      {label}
      <InputComponent type={type} text={text} inputValue={inputValue} {...rest}/>
    </label>
  )
}

export default LabelWithInput