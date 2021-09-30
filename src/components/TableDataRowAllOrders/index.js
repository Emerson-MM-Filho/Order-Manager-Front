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

  const total = (products) => {
    return products.reduce((acc, current) => {
      if(current.type === 'Wheight') {
        return acc + (current.quantity * current.option.price)
      }
      return acc + (current.quantity * current.option.price)
    }, 0).toFixed(2).replace('.', ',')
  }

  const { setModal, setOrder } = useContext(AllOrdersContext)

  return(
    <tr className={`all-orders-table-row ${complete && 'order-complete'}`}>
      <td><input type='checkbox' onClick={() => setComplete(!complete)}/></td>
      <td className='client-name'>{data.client.name}</td>
      <td>{DateTransform(data.delivery.date)}</td>
      <td>R$ {total(data.products)}</td>
      <td><PaymentMethod type={data.payment.method} addClass='component-color'/></td>
      <td><PaymentStatus status={data.payment.status}/></td>
      <td><DeliveryType type={data.delivery.method} addClass='component-color'/></td>
      <td className='actions'>
        <ButtonIcon
          className='show-more-icon'
          onClick={() => {
            setModal(true)
            setOrder(data)
          } }
          icon={eyeIcon}
        />
        <ButtonIcon
          className='edit-icon'
          icon={editIcon}
          onClick={() => history.push(`/order-edit/${data.id}`)}
        />
        <ButtonIcon className='trash-icon' icon={trashIcon} />
      </td>
    </tr>
  )
}

export default TableDataRowAllOrders