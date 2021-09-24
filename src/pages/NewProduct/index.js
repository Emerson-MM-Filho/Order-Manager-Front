import React from 'react'
import './style.scss'

import Header from '../../components/Header'
import ContentPageTitle from '../../components/ContentPageTitle'
import NewProductForm from '../../components/NewProductForm'
import NewProductOptionsForm from '../../components/NewProductOptionsForm'

function NewProduct() {
  return (
    <div>
      <Header />
        <div className='new-order-container'>
          <ContentPageTitle
            title='Novo Produto'
            buttonText='Salvar Produto'
            handleClick={() => console.log('Produto Salvo')}
          />
          <div className='product-form'>
            <NewProductForm />
            <NewProductOptionsForm />
          </div>
        </div>
    </div>
  )
}

export default NewProduct