import React from 'react'
import './style.scss'

import Header from '../../components/Header'
import ProductsFilter from '../../components/ProductsFIlter'
import AllProductsTable from '../../components/AllProductsTable'

import AllProductsProvider from '../../context/allProducts/allProductsProvider'

function AllProducts() {
  return (
    <AllProductsProvider>
      <div data-testid='all-products-page'>
        <Header />
        <div className='all-products-container'>
          <h1>Produtos</h1>
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
