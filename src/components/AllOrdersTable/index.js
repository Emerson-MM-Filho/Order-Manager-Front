import React from 'react'
import './style.scss'

import { plusIcon } from '../../icons'
import DefaultContainer from '../DefaultContainer'
import SearchBar from '../SearchBar'
import DefaultButton from '../DefaultButton'
import TableDataRow from '../TableDataRow'

import { mockOrders } from '../../mockDataBase'

function AllOrdersTable() {
  return (
    <DefaultContainer addClass='all-orders'>
      <div className='all-orders-table-container'>
        <div className='all-orders-table-container-header'>
          <SearchBar theme='gray'/>
          <DefaultButton icon={plusIcon} text='Novo Pedido' />
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
              {mockOrders.map((current) => <TableDataRow data={current} key={current.id}/>)}
            </tbody>
          </table>
        </div>
      </div>
    </DefaultContainer>
  )
}

export default AllOrdersTable