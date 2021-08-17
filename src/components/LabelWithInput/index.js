import React from 'react'
import './style.scss'

import InputComponent from '../InputComponent'

function LabelWithInput({type, label, text}) {
  return(
    <label>
      {label}
      <InputComponent type={type} text={text}/>
    </label>
  )
}

export default LabelWithInput