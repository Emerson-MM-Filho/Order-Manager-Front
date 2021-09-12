import React from 'react'
import './style.scss'

import DefaultContainer from '../DefaultContainer'

function ProductsFilter() {
  return (
    <DefaultContainer addClass='filter-products'>
      <div className='products-filter-container'>
        <h2>Filtros</h2>
      </div>
    </DefaultContainer>
  )
}

export default ProductsFilter