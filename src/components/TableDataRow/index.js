import React from 'react'

import PaymentMethod from '../PaymentMethod'
import PaymentStatus from '../PaymentStatus'
import DeliveryType from '../DeliveryType'

const total = (products) => {
  return products.reduce((acc, current) => {
    if(current.type === 'wheight') {
      return acc + ((current.quantity / 1000) * current.option.price)
    }
    return acc + (current.quantity * current.option.price)
  }, 0).toFixed(2).replace('.', ',')
}

function TableDataRow({data}) {
  return(
    <tr>
      <td><input type='checkbox' /></td>
      <td>{data.id}</td>
      <td>{data.client.name}</td>
      <td>{data.delivery.date}</td>
      <td>R$ {total(data.products)}</td>
      <td><PaymentMethod type={data.payment.method}/></td>
      <td><PaymentStatus status={data.payment.status}/></td>
      <td><DeliveryType type={data.delivery.method} /></td>
      <td></td>
    </tr>
  )
}

export default TableDataRow