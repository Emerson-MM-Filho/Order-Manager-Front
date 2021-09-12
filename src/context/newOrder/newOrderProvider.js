import React, { useState, useEffect } from 'react'
import NewOrderContext from './newOrderContext'

function NewOrderProvider({children}) {
  const [showAddress, setShowAddress] = useState(true)
  const [deliveryMethod, setDeliveryMethod] = useState('dispatch')
  const [showDateTime, setShowDateTime] = useState(false)
  const [products, setProducts] = useState([])
  const [modal, setModal] = useState(false)
  const [clientForm, setClientForm] = useState({})

  useEffect(() => modal === true ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset' , [modal])

  const contextValue = {
    showAddress,
    setShowAddress,
    deliveryMethod,
    setDeliveryMethod,
    showDateTime,
    setShowDateTime,
    products,
    setProducts,
    modal, 
    setModal,
    clientForm,
    setClientForm,
  }
  
  return(
    <NewOrderContext.Provider value={contextValue}>
      { children }
    </NewOrderContext.Provider>
  )
}

export default NewOrderProvider