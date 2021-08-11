import React from 'react'
import './style.scss'

import { creditCardIcon, coinIcon } from '../../icons';

function PaymentMethod({type}) {
  return (
    <div className='payment-method'>
      {type === 'Cartão de Crédito' ? creditCardIcon : coinIcon}
      {type}
    </div>
  )
}

export default PaymentMethod