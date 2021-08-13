import React from 'react';
import { connect } from 'react-redux';
import './style.scss'

import Header from '../../components/Header'
import OrdersFilter from '../../components/OrdersFilter'
import AllOrdersTable from '../../components/AllOrdersTable'
import OrderDetail from '../../components/OrderDetail'

function allOrders({showOrderDetail}) {
  return (
    <div data-testid='all-orders-page'>
          {showOrderDetail &&<OrderDetail />}
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

const mapStateToProps = (store) => ({
  showOrderDetail: store.allOrders.showOrderDetailModal
})

export default connect(mapStateToProps, null)(allOrders)