import React, { useEffect, useContext } from 'react'
import { useDispatch } from 'react-redux'
import './style.scss'

import { addProductsAction } from '../../redux/actions/newOrder'
import NewOrderContext from '../../context/newOrder/newOrderContext'
import DefaultContainer from '../DefaultContainer'
import NewOrderTableRow from '../NewOrderTableRow'
import DefaultButton from '../DefaultButton'
import NewOrderProductsModal from '../NewOrderProductsModal'

import { plusIcon } from '../../icons'

function NewOrderTable({orderToEdit}) {
  useEffect(() => {
    if (orderToEdit) setProducts(orderToEdit.products)
  })
    const dispatch = useDispatch()
    const { products, modal, setModal, setProducts } = useContext(NewOrderContext)
    
  const handleDelete = (product) => {
    const removedProduct = products.filter(current => current !== product)
    dispatch(addProductsAction(removedProduct))
    setProducts(removedProduct)
  }

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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((current) => <NewOrderTableRow product={current} key={current.option.id} handleDelete={handleDelete}/>)}
        </tbody>
      </table>
    </DefaultContainer>
  )
}

export default NewOrderTable