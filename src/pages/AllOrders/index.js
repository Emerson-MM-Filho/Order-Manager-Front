import React from 'react'
import './style.scss'

import { useHistory } from 'react-router-dom'
import AllOrdersProvider from '../../context/allOrders/allOrdersProvider'
import Header from '../../components/Header'
import ContentPageTitle from '../../components/ContentPageTitle'
import OrdersFilter from '../../components/OrdersFilter'
import AllOrdersTable from '../../components/AllOrdersTable'

function AllOrders() {
  const history = useHistory()
  return (
    <AllOrdersProvider>
      <div data-testid='all-orders-page'>
        <Header />
        <div className='all-orders-container'>
          <ContentPageTitle
            title='Todos os Pedidos'
            buttonText='Novo Pedido'
            handleClick={() => history.push('/new-order')}
          />
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