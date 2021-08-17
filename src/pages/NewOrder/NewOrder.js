import React from 'react'
import './style.scss'

import Header from '../../components/Header'
import NewOrderTable from '../../components/NewOrderTable'
import NewOrderForm from '../../components/NewOrderForm'

function NewOrder() {
  return (
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
  )
}

export default NewOrder