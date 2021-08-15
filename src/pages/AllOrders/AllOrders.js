import React, { useContext } from 'react'
import './style.scss'

import AllOrdersContext from '../../context/allOrders/allOrdersContext'
import Header from '../../components/Header'
import OrdersFilter from '../../components/OrdersFilter'
import AllOrdersTable from '../../components/AllOrdersTable'
import OrderDetail from '../../components/OrderDetail'

function AllOrders() {
  const { modal } = useContext(AllOrdersContext)
  return (
    <div data-testid='all-orders-page'>
      {modal && <OrderDetail />}
      <Header />
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

export default AllOrders