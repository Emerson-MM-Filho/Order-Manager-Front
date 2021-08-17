import React from 'react'
import './style.scss'

import AllOrdersProvider from '../../context/allOrders/allOrdersProvider'
import Header from '../../components/Header'
import OrdersFilter from '../../components/OrdersFilter'
import AllOrdersTable from '../../components/AllOrdersTable'

function AllOrders() {
  return (
    <AllOrdersProvider>
      <div data-testid='all-orders-page'>
        <Header />
        <div className='all-orders-container'>
          <h1>Pedidos</h1>
          <div className='all-orders-page-content'>
            <OrdersFilter />
            <AllOrdersTable />
          </div>
        </div>
      </div>
    </AllOrdersProvider>
  )
}

export default AllOrders