import React, { useContext } from 'react'
import './style.scss'

import DefaultContainer from '../DefaultContainer'
import TableOrderDetails from '../TableOrderDetails'
import AllOrdersContext from '../../context/allOrders/allOrdersContext'
import DefaultModal from '../DefaultModal'; 
import { closeIcon } from '../../icons'
import DeliveryInfos from '../DeliveryInfos'


function OrderDetail() {
  const { order, setModal } = useContext(AllOrdersContext)
  
  return (
    <DefaultModal closeModal={() => setModal(false)}>
      <div className='order-detail-container'>
        <div className='header'>
          <h2>Detalhes do Pedido</h2>
          <button type='button' onClick={() => setModal(false)}>{closeIcon}</button>
        </div>
        <div className='order-id'>
          <p>ID Pedido: <span>{order.id}</span></p>
        </div>
        <div className='order-detail-content'>
          <DefaultContainer addClass='products-table'>
            <TableOrderDetails products={order.products} />
          </DefaultContainer>
          <DefaultContainer addClass='delivery-details'>
            <DeliveryInfos order={order} />
          </DefaultContainer>
        </div>
      </div>
    </DefaultModal>
  )
}

export default OrderDetail