import React from 'react'
import './style.scss'

import SelectInput from '../SelectComponent'

function LabelWithInput({text, options, selectedValue, ...rest}) {
  return(
    <label className='label-with-select'>
      {text}
      <SelectInput options={options} selectedValue={selectedValue} {...rest}/>
    </label>
  )
}

export default LabelWithInput