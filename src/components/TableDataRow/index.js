import React from 'react'
import { connect } from 'react-redux'
import { showOrderDetailModalAction } from '../../redux/actions/allOrders'
import './style.scss'

import PaymentMethod from '../PaymentMethod'
import PaymentStatus from '../PaymentStatus'
import DeliveryType from '../DeliveryType'

import { eyeIcon, editIcon, trashIcon } from '../../icons'

const total = (products) => {
  return products.reduce((acc, current) => {
    if(current.type === 'wheight') {
      return acc + ((current.quantity / 1000) * current.option.price)
    }
    return acc + (current.quantity * current.option.price)
  }, 0).toFixed(2).replace('.', ',')
}

function TableDataRow({data, showModal}) {
  return(
    <tr className="all-orders-table-row">
      <td><input type='checkbox' /></td>
      <td>{data.id}</td>
      <td className='client-name'>{data.client.name}</td>
      <td>{data.delivery.date}</td>
      <td>R$ {total(data.products)}</td>
      <td><PaymentMethod type={data.payment.method} addClass='component-color'/></td>
      <td><PaymentStatus status={data.payment.status}/></td>
      <td><DeliveryType type={data.delivery.method} addClass='component-color'/></td>
      <td className='actions'>
        <button className='show-more-icon' onClick={() => { showModal(true) }}>{eyeIcon}</button>
        <button className='edit-icon'>{editIcon}</button>
        <button className='trash-icon'>{trashIcon}</button>
      </td>
    </tr>
  )
}

const mapDispatchToProps = (dispatch) =>({
  showModal: (params) => dispatch(showOrderDetailModalAction(params))
})

export default connect(null, mapDispatchToProps)(TableDataRow)