import React, { useState } from 'react'
import AllOrdersContext from './allOrdersContext'

function AllOrdersProvider({children}) {
  const [modal, setModal] = useState(false)
  const [order, setOrder] = useState({})

  const contextValue = {
    modal,
    setModal,
    order,
    setOrder,
  }
  
  return(
    <AllOrdersContext.Provider value={contextValue}>
      { children }
    </AllOrdersContext.Provider>
  )
}

export default AllOrdersProvider