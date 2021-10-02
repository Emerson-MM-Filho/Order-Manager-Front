import React, { useContext, useState } from 'react'

import LabelWithInput from '../LabelWithInput'
import LabelWithSelect from '../LabelWithSelect'

import newOrderContext from '../../context/newOrder/newOrderContext'

function PaymentForm({order, handleChange}) {
  const { paymentsMethods } = useContext(newOrderContext)

  const [paymentStatus, setPaymentStatus] = useState(false)

  return (
    <>
      <LabelWithSelect
        options={paymentsMethods}
        text='Método de Pagamento'
        name='paymentMethod'
        selectedValue={order ? order.payment.method : ''}
        handleChange={(event) => handleChange(event)}
      />
      <LabelWithInput
        type='checkbox'
        label='Este pedido está pago?'
        addClass='inline-label'
        name='paymentStatus'
        inputValue={order ? order.payment.status : paymentStatus}
        checked={paymentStatus}
        handleChange={(event) => {
          setPaymentStatus(!paymentStatus)
          handleChange(event)
        }}
      />
    </>
  )
}

export default PaymentForm