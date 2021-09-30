import React, { useState, useEffect } from 'react'
import AllOrdersContext from './allOrdersContext'

function AllOrdersProvider({children}) {

  const allSavedsOrders = [JSON.parse(localStorage.getItem('allOrders'))] || []
  const [modal, setModal] = useState(false)
  const [order, setOrder] = useState({})
  const [allOrders, setAllOrders] = useState(allSavedsOrders)

  useEffect(() => modal === true ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset' , [modal])

  const contextValue = {
    modal,
    setModal,
    order,
    setOrder,
    allOrders,
    setAllOrders,
  }
  
  return(
    <AllOrdersContext.Provider value={contextValue}>
      { children }
    </AllOrdersContext.Provider>
  )
}

export default AllOrdersProvider