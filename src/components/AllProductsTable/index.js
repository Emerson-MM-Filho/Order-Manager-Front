import React, { useContext } from 'react'
import './style.scss'

import { useHistory } from 'react-router-dom'
import { plusIcon } from '../../icons'
import DefaultContainer from '../DefaultContainer'
import SearchBar from '../SearchBar'
import DefaultButton from '../DefaultButton'
import AllProductsContext from '../../context/allProducts/allProductsContext'

function AllProductsTable() {
  const { products } = useContext(AllProductsContext)
  const history = useHistory()

  return (
    <DefaultContainer addClass='all-products'>
      <div className='all-products-table-container'>
        <div className='all-products-table-container-header'>
          <SearchBar theme='gray'/>
          <DefaultButton icon={plusIcon} text='Novo Produto' handleClick={() => history.push('/new-product')}/>
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
              {/* {products.map((current) => <TableDataRowAllOrders data={current} key={current.id}/>)} */}
            </tbody>
          </table>
        </div>
      </div>
    </DefaultContainer>
  )
}

export default AllProductsTable