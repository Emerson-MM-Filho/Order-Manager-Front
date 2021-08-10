import React from 'react';
import HeaderComponent from '../components/Header'

function allOrders() {
  return (
    <div data-testid='all-orders-page'>
      <HeaderComponent />
      <div className='all-orders-container'>
        <h1>Pedidos</h1>
      </div>
    </div>
  )
}

export default allOrders