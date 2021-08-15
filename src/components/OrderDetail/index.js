import React, { useContext } from 'react'
import './style.scss'

import TableOrderDetails from '../TableOrderDetails'
import AllOrdersContext from '../../context/allOrders/allOrdersContext'
import DefaultModal from '../DefaultModal'; 
import { closeIcon } from '../../icons'


function OrderDetail() {
  const { order, setModal } = useContext(AllOrdersContext)
  
  return (
    <DefaultModal>
      <div className='order-detail-container'>
        <div className='header'>
          <h2>Detalhes do Pedido</h2>
          <button type='button' onClick={() => setModal(false)}>{closeIcon}</button>
        </div>
        <div className='order-id'>
          <p>ID Pedido: <span>{order.id}</span></p>
        </div>
        <TableOrderDetails products={order.products} />
      </div>
    </DefaultModal>
  )
}

export default OrderDetail