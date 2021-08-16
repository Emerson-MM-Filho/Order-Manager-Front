import React, { useContext, useState } from 'react'
import './style.scss'

import AllOrdersContext from '../../context/allOrders/allOrdersContext'
import PaymentMethod from '../PaymentMethod'
import PaymentStatus from '../PaymentStatus'
import DeliveryType from '../DeliveryType'

import { eyeIcon, editIcon, trashIcon } from '../../icons'


function TableDataRowAllOrders({data}) {
  const [complete, setComplete] = useState(false)

  const total = (products) => {
    return products.reduce((acc, current) => {
      if(current.type === 'Wheight') {
        return acc + ((current.quantity / 1000) * current.option.price)
      }
      return acc + (current.quantity * current.option.price)
    }, 0).toFixed(2).replace('.', ',')
  }

  const { setModal, setOrder } = useContext(AllOrdersContext)

  return(
    <tr className={`all-orders-table-row ${complete && 'order-complete'}`}>
      <td><input type='checkbox' onClick={() => setComplete(!complete)}/></td>
      <td>{data.id}</td>
      <td className='client-name'>{data.client.name}</td>
      <td>{data.delivery.date}</td>
      <td>R$ {total(data.products)}</td>
      <td><PaymentMethod type={data.payment.method} addClass='component-color'/></td>
      <td><PaymentStatus status={data.payment.status}/></td>
      <td><DeliveryType type={data.delivery.method} addClass='component-color'/></td>
      <td className='actions'>
        <button className='show-more-icon' onClick={() => {
          setModal(true)
          setOrder(data)
        } }>{eyeIcon}</button>
        <button className='edit-icon'>{editIcon}</button>
        <button className='trash-icon'>{trashIcon}</button>
      </td>
    </tr>
  )
}

export default TableDataRowAllOrders