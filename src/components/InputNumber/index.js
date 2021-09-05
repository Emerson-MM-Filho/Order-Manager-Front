import React, { useState, useEffect } from 'react'
import './style.scss'

import { plusIcon, minusIcon } from '../../icons'

function InputNumber({quantity}) {
  const [previousQuantity, setPreviousQuantity] = useState(quantity)
  useEffect(() => {
    setPreviousQuantity(quantity)
  }, [setPreviousQuantity, quantity])
  const handleClick = ({currentTarget: {name, value}}) => {
    switch (name) {
      case 'plus':
        return setPreviousQuantity(previousQuantity + 1)
      case 'minus':
        if ( previousQuantity > 1 ) return setPreviousQuantity(previousQuantity - 1)
        break
      case 'input':
        return setPreviousQuantity(parseFloat(value))
      default:
        break
    }
  }

  return (
    <div className='input-number-component'>
      <input type="number" value={previousQuantity} name='input' onChange={(event) => handleClick(event)}/>
      <div className='increment-buttons'>
        <button type='button' name='plus' onClick={(event) => handleClick(event)}>{plusIcon}</button>
        <button type='button' name='minus' onClick={(event) => handleClick(event)}>{minusIcon}</button>
      </div>
    </div>
  )
}

export default InputNumber