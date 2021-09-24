import React from 'react'
import './style.scss'

import { useHistory } from 'react-router-dom'
import Header from '../../components/Header'
import ProductsFilter from '../../components/ProductsFIlter'
import AllProductsTable from '../../components/AllProductsTable'
import ContentPageTitle from '../../components/ContentPageTitle'
import AllProductsProvider from '../../context/allProducts/allProductsProvider'

function AllProducts() {
  const history = useHistory()
  return (
    <AllProductsProvider>
      <div data-testid='all-products-page'>
        <Header />
        <div className='all-products-container'>
          <ContentPageTitle
            title='Todos os Produtos'
            buttonText='Novo Produto'
            handleClick={() => history.push('/new-product')}
          />
          <div className='all-products-page-content'>
            <ProductsFilter />
            <AllProductsTable />
          </div>
        </div>
      </div>
    </AllProductsProvider>
  )
}

export default AllProducts
