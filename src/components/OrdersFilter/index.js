import React from 'react'
import './style.scss'

import DefaultContainer from '../DefaultContainer'

function OrdersFilter() {
  return (
    <DefaultContainer addClass='filter-order'>
      <div className='orders-filter-container'>
        <h2>Filtros</h2>
      </div>
    </DefaultContainer>
  )
}

export default OrdersFilter