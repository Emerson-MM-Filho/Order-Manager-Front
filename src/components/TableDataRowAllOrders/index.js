import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import './style.scss'

import AllOrdersContext from '../../context/allOrders/allOrdersContext'
import PaymentMethod from '../PaymentMethod'
import PaymentStatus from '../PaymentStatus'
import DeliveryType from '../DeliveryType'
import ButtonIcon from '../ButtonIcon'

import { eyeIcon, editIcon, trashIcon } from '../../icons'

import { DateTransform } from '../../helpers/dateTransform'

function TableDataRowAllOrders({data}) {
  const [complete, setComplete] = useState(false)

  const history = useHistory()

  const deleteOrder = (orderId) => {
    const allOrders = JSON.parse(localStorage.getItem('allOrders'))
    const filtered = allOrders.filter(current => current.id !== orderId)
    localStorage.setItem('allOrders', JSON.stringify(filtered))
    setAllOrders(filtered)
  }

  const total = (products) => {
    return products.reduce((acc, current) => {
      if(current.type === 'Wheight') {
        return acc + (current.quantity * current.option.price)
      }
      return acc + (current.quantity * current.option.price)
    }, 0).toFixed(2).replace('.', ',')
  }

  const { setModal, setOrder, setAllOrders } = useContext(AllOrdersContext)

  return(
    <tr className={`all-orders-table-row ${complete && 'order-complete'}`}>
      <td><input type='checkbox' onClick={() => setComplete(!complete)}/></td>
      <td className='client-name'>{data.client.name}</td>
      <td>{DateTransform(data.createdAt.split(' ')[0])}</td>
      <td>R$ {total(data.products)}</td>
      <td><PaymentMethod type={data.payment.method} addClass='component-color'/></td>
      <td><PaymentStatus status={data.payment.status}/></td>
      <td><DeliveryType type={data.delivery.method} addClass='component-color'/></td>
      <td className='actions'>
        <ButtonIcon
          color='blue'
          icon={eyeIcon}
          onClick={() => {
            setModal(true)
            setOrder(data)
          } }
        />
        <ButtonIcon
          icon={editIcon}
          color='green'
          onClick={() => history.push(`/order-edit/${data.id}`)}
        />
        <ButtonIcon
          color='red'
          icon={trashIcon}
          onClick={() => deleteOrder(data.id)}
        />
      </td>
    </tr>
  )
}

export default TableDataRowAllOrders