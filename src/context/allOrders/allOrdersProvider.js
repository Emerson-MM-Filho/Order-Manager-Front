import React, { useState } from 'react'
import AllOrdersContext from './allOrdersContext'

function Provider({children}) {
  const [modal, setModal] = useState(false)

  const contextValue = {
    modal,
    setModal,
  }
  
  return(
    <AllOrdersContext.Provider value={contextValue}>
      { children }
    </AllOrdersContext.Provider>
  )
}

export default Provider