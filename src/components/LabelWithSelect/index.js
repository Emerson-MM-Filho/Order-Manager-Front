import React from 'react'
import './style.scss'

import SelectInput from '../SelectComponent'

function LabelWithInput({text, options, ...rest}) {
  return(
    <label className='label-with-select'>
      {text}
      <SelectInput options={options} {...rest}/>
    </label>
  )
}

export default LabelWithInput