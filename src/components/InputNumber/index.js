import React from 'react'
import './style.scss'

import { plusIcon, minusIcon } from '../../icons'

function InputNumber() {
  return (
    <div className='input-number-component'>
      <input type="number" />
      <div className='increment-buttons'>
        <button type='button'>{plusIcon}</button>
        <button type='button'>{minusIcon}</button>
      </div>
    </div>
  )
}

export default InputNumber