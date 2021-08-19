import React, { useContext } from 'react'
import './style.scss'

import NewOrderContext from '../../context/newOrder/newOrderContext'
import DefaultContainer from '../DefaultContainer'
import NewOrderTableRow from '../NewOrderTableRow'
import DefaultButton from '../DefaultButton'
import NewOrderProductsModal from '../NewOrderProductsModal'

import { plusIcon } from '../../icons'

function NewOrderTable() {
  const { products, modal, setModal } = useContext(NewOrderContext)

  return (
    <DefaultContainer addClass='new-order-table'>
      {modal && <NewOrderProductsModal />}
      <div className='add-product-button'>
        <DefaultButton icon={plusIcon} text='Adicionar Produto' handleClick={() => setModal(true)}/>
      </div>
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
        <NewOrderTableRow products={products}/>
      </table>
    </DefaultContainer>
  )
}

export default NewOrderTable