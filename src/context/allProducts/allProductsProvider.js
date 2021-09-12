import React, { useState } from 'react'
import AllProductsContext from './allProductsContext'

import { mockProducts } from '../../mockDataBase'

function AllProductsProvider({children}) {
  const [products, setProducts] = useState(mockProducts)

  const contextValue = {
    products,
    setProducts,
  }
  
  return(
    <AllProductsContext.Provider value={contextValue}>
      { children }
    </AllProductsContext.Provider>
  )
}

export default AllProductsProvider