import React from 'react'
import './style.scss'

import NewOrderProvider from '../../context/newOrder/newOrderProvider'
import Header from '../../components/Header'
import NewOrderTable from '../../components/NewOrderTable'
import NewOrderForm from '../../components/NewOrderForm'

function NewOrder() {
  return (
    <NewOrderProvider>
      <div data-testid='new-order-page'>
        <Header />
        <div className='new-order-container'>
          <h1>Novo Pedido</h1>
          <div className='new-order-page-content'>
            <NewOrderTable />
            <NewOrderForm />
          </div>
        </div>
      </div>
    </NewOrderProvider>
  )
}

export default NewOrder