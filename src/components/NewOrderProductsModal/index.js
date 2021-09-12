import React, { useState, useContext } from 'react'
import './style.scss'

import NewOrderContext from '../../context/newOrder/newOrderContext'
import SearchBar from '../SearchBar'
import DefaultModal from '../DefaultModal'
import DefaultContainer from '../DefaultContainer'
import DefaultButton from '../DefaultButton'
import NewOrderAddProductTableRow from '../NewOrderAddProductTableRow'
import { closeIcon, plusIcon } from '../../icons'
import { mockProducts } from '../../mockDataBase'

function NewOrderProductsModal() {
  const [previousProducts, setPreviousProducts] = useState([])
  const { setModal, products, setProducts } = useContext(NewOrderContext)

  
  const addProducts = () => {
    const compareProducts = (productA, productB) => productA.id === productB.id && productA.options.id === productB.options.id
    let newProducts = [...products]
    previousProducts.forEach(newProduct => {
      const alreadyExists = products.find(product => compareProducts(product, newProduct))
      
      if(!alreadyExists) return newProducts.push({...newProduct, quantity: 1})

      newProducts = newProducts.map(product => compareProducts(product, newProduct) ? {...product, quantity: product.quantity + 1} : product )
    })
    setProducts(newProducts)
    setModal(false)
  }

  const savePreviousProducts = (product) => {
    const alredyExists = previousProducts.find(current => current.id === product.id)
    if (alredyExists) {
      return setPreviousProducts(
        previousProducts.filter(current => current.id !== product.id)
      )
    }
    setPreviousProducts([
      ...previousProducts,
      product,
    ])
  }

  return (
    <DefaultModal id='products-modal' addClass='new-order-products-modal'>
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
                <th>Imagem</th>
                <th>Produto</th>
                <th>Opção</th>
                <th>Preço</th>
                <th>Adicionar</th>
              </tr>
            </thead>
            <tbody>
              {mockProducts.map((current) => <NewOrderAddProductTableRow product={current} handleClick={savePreviousProducts} key={current.id}/>)}
            </tbody>
          </table>
        </DefaultContainer>
        <div className='button-container'>
          <DefaultButton icon={plusIcon} text='Adicionar' handleClick={addProducts}/>
        </div>
      </div>
    </DefaultModal>
  )
}

export default NewOrderProductsModal