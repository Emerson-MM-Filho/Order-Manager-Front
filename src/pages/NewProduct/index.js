import React from 'react'

import Header from '../../components/Header'
import ContentPageTitle from '../../components/ContentPageTitle'
import NewProductForm from '../../components/NewProductForm'

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
          <NewProductForm />
        </div>
    </div>
  )
}

export default NewProduct