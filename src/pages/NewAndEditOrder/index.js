import React from 'react'
import './style.scss'

import NewOrderProvider from '../../context/newOrder/newOrderProvider'
import Header from '../../components/Header'
import NewOrderTable from '../../components/NewOrderTable'
import NewOrderForm from '../../components/NewOrderForm'
import ContentPageTitle from '../../components/ContentPageTitle'

function NewAndEditOrder() {
  return (
    <NewOrderProvider>
      <div data-testid='new-order-page'>
        <Header />
        <div className='new-order-container'>
          <ContentPageTitle
            title='Novo Pedido'
            buttonText='Salvar Pedido'
            handleClick={() => console.log('Pedido Salvo')}
          />
          <div className='new-order-page-content'>
            <NewOrderTable />
            <NewOrderForm />
          </div>
        </div>
      </div>
    </NewOrderProvider>
  )
}

export default NewAndEditOrder