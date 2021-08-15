import React, { useContext } from 'react'
import './style.scss'

import AllOrdersContext from '../../context/allOrders/allOrdersContext'
import DefaultModal from '../DefaultModal'; 
import { closeIcon } from '../../icons'

function OrderDetail() {
  const { setModal } = useContext(AllOrdersContext)

  return (
    <DefaultModal>
      <div className='order-detail'>
        <h2>Detalhes do Pedido</h2>
        <button type='button' onClick={() => setModal(false)}>{closeIcon}</button>
      </div>
    </DefaultModal>
  )
}

export default OrderDetail