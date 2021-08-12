import React from 'react'
import './style.scss'

import { creditCardIcon, coinIcon } from '../../icons';

function PaymentMethod({type, addClass}) {
  return (
    <div className={`payment-method ${addClass}`}>
      {type === 'Cartão' ? creditCardIcon : coinIcon}
      {type}
    </div>
  )
}

export default PaymentMethod