import React from 'react'
import './style.scss'

function PaymentStatus({status}) {
  return (
    <div className={`payment-status ${status === true ? 'paid-out' : 'to-receive'}`}>
      {status === true ? 'Pago' : 'A Receber'}
    </div>
  )
}

export default PaymentStatus