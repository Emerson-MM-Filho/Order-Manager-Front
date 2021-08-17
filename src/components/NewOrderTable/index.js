import React from 'react'
import './style.scss'

import DefaultContainer from '../DefaultContainer'

function NewOrderTable() {
  return (
    <DefaultContainer addClass='new-order-table'>
      <table className='new-order-products-table'>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Total</th>
          </tr>
        </thead>
      </table>
    </DefaultContainer>
  )
}

export default NewOrderTable