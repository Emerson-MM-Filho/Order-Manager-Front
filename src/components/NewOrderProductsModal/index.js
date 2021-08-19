import React, { useContext } from 'react'
import './style.scss'

import NewOrderContext from '../../context/newOrder/newOrderContext'
import SearchBar from '../SearchBar'
import DefaultModal from '../DefaultModal'
import DefaultContainer from '../DefaultContainer'
import NewOrderAddProductTableRow from '../NewOrderAddProductTableRow'
import { closeIcon } from '../../icons'
import { mockProducts } from '../../mockDataBase'

function NewOrderProductsModal() {
  const { setModal } = useContext(NewOrderContext)
  return (
    <DefaultModal addClass='new-order-products-modal'>
      <div className='products-modal-container'>
        <div className='header'>
          <h2>Produtos</h2>
          <SearchBar />
          <button type='button' onClick={() => setModal(false)}>{closeIcon}</button>
        </div>
        <DefaultContainer addClass='table-content-container'>
          <table>
            <thead>
              <tr>
                <td>Produto</td>
                <td>Opção</td>
                <td>Descrição</td>
                <td>Preço</td>
              </tr>
            </thead>
            <tbody>
              {mockProducts.map((current) => <NewOrderAddProductTableRow product={current} />)}
            </tbody>
          </table>
        </DefaultContainer>
      </div>
    </DefaultModal>
  )
}

export default NewOrderProductsModal