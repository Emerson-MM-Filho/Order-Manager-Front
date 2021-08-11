import React from 'react';
import './style.scss'

import HeaderComponent from '../../components/Header'
import OrdersFilter from '../../components/OrdersFilter'
import AllOrdersTable from '../../components/AllOrdersTable'

function allOrders() {
  return (
    <div data-testid='all-orders-page'>
      <HeaderComponent />
      <div className='all-orders-container'>
        <h1>Pedidos</h1>
        <div className='all-orders-page-content'>
          <OrdersFilter />
          <AllOrdersTable />
        </div>
      </div>
    </div>
  )
}

export default allOrders