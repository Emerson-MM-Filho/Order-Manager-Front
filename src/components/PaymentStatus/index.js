import React from 'react'
import './style.scss'

function PaymentStatus({status}) {
  return (
    <div className={`payment-status ${status === 'Pago' ? 'paid-out' : 'to-receive'}`}>
      {status}
    </div>
  )
}

export default PaymentStatus