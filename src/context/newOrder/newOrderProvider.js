import React, { useState } from 'react'
import NewOrderContext from './newOrderContext'

function NewOrderProvider({children}) {
  const [showAddress, setShowAddress] = useState(true)
  const [deliveryMethod, setDeliveryMethod] = useState('dispatch')
  const [showDateTime, setShowDateTime] = useState(false)

  const contextValue = {
    showAddress,
    setShowAddress,
    deliveryMethod,
    setDeliveryMethod,
    showDateTime,
    setShowDateTime,
  }
  
  return(
    <NewOrderContext.Provider value={contextValue}>
      { children }
    </NewOrderContext.Provider>
  )
}

export default NewOrderProvider