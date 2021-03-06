import React from 'react'
import './style.scss'

import TableDataRowOrderDetails from '../TableDataRowOrderDetails'

function TableOrderDetails({products}) {
  const total = (products) => {
    return products.reduce((acc, current) => {
      if(current.type === 'Wheight') {
        return acc + (current.quantity * current.option.price)
      }
      return acc + (current.quantity * current.option.price)
    }, 0).toFixed(2).replace('.', ',')
  }

  return (
    <table className='order-detail-products-table'>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Descrição</th>
          <th>Opção</th>
          <th>Quantidade</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => <TableDataRowOrderDetails data={product} key={product.id} />)}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan='4'>Total:</td>
          <td>{`R$ ${total(products)}`}</td>
        </tr>
      </tfoot>
    </table>
  )
}

export default TableOrderDetails