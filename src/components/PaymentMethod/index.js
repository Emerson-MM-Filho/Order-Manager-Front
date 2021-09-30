import React from 'react'
import './style.scss'

import { creditCardIcon, coinIcon } from '../../icons';

function PaymentMethod({type, addClass}) {
  const obj = (currentType) => {
    switch (currentType) {
      case 'creditCard':
        return {icon: creditCardIcon, name: 'Cartão de Crédito'}

      case 'debitCard':
        return {icon: creditCardIcon, name: 'Cartão de Débito'}

      case 'pix':
        return {icon: coinIcon, name: 'Pix'}

      case 'cash':
      return {icon: coinIcon, name: 'Dinheiro'}
  
      default:
        break
    }
  }

  return (
    <div className={`payment-method ${addClass}`}>
      {obj(type).icon}
      {obj(type).name}
    </div>
  )
}

export default PaymentMethod