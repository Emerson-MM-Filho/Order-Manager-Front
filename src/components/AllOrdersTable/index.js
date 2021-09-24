import React, { useContext } from 'react'
import './style.scss'

import DefaultContainer from '../DefaultContainer'
import SearchBar from '../SearchBar'
import TableDataRowAllOrders from '../TableDataRowAllOrders'
import AllOrdersContext from '../../context/allOrders/allOrdersContext'
import OrderDetail from '../OrderDetail'

function AllOrdersTable() {
  const { modal, allOrders } = useContext(AllOrdersContext)

  return (
    <DefaultContainer addClass='all-orders'>
      {modal && <OrderDetail />}
      <div className='all-orders-table-container'>
        <div className='all-orders-table-container-header'>
          <SearchBar theme='gray'/>
        </div>
        <div className='all-orders-table'>
          <table>
            <thead>
              <tr>
                <th>Concluir</th>
                <th>Cód. Pedido</th>
                <th>Cliente</th>
                <th>Data</th>
                <th>Total</th>
                <th>Método Pagamento</th>
                <th>Status Pagamento</th>
                <th>Método Envio</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((current) => <TableDataRowAllOrders data={current} key={current.id}/>)}
            </tbody>
          </table>
        </div>
      </div>
    </DefaultContainer>
  )
}

export default AllOrdersTable