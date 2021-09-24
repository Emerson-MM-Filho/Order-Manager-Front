import React, { useContext } from 'react'
import './style.scss'

import DefaultContainer from '../DefaultContainer'
import SearchBar from '../SearchBar'
import AllProductsContext from '../../context/allProducts/allProductsContext'
import TableDataRowAllProducts from '../TableDataRowAllProducts'

function AllProductsTable() {
  const { products } = useContext(AllProductsContext)

  return (
    <DefaultContainer addClass='all-products'>
      <div className='all-products-table-container'>
        <div className='all-products-table-container-header'>
          <SearchBar theme='gray'/>
        </div>
        <div className='all-products-table'>
          <table>
            <thead>
              <tr>
                <th>Concluir</th>
                <th>Cód. Produto</th>
                <th>Nome</th>
                <th>Tipo</th>
                <th>Tag</th>
                <th>Descrição</th>
                <th>Opções</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {products.map((current) => <TableDataRowAllProducts data={current} key={current.id}/>)}
            </tbody>
          </table>
        </div>
      </div>
    </DefaultContainer>
  )
}

export default AllProductsTable