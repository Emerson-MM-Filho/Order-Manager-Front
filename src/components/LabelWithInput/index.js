import React from 'react'
import './style.scss'

import InputComponent from '../InputComponent'

function LabelWithInput({type, label, text, addClass, ...rest}) {
  return(
    <label className={`label-with-input ${addClass}`}>
      {label}
      <InputComponent type={type} text={text} {...rest}/>
    </label>
  )
}

export default LabelWithInput