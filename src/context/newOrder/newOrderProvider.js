import React, { useState, useEffect } from 'react'
import NewOrderContext from './newOrderContext'

import { currentDate, currentTime } from '../../helpers/currentDateTime'

function NewOrderProvider({children}) {
  const [deliveryMethod, setDeliveryMethod] = useState('dispatch')
  const [showDateTime, setShowDateTime] = useState(false)
  const [products, setProducts] = useState([])
  const [modal, setModal] = useState(false)
  const [clientForm, setClientForm] = useState({})

  const deliveryMethods = [
    {
      value: 'dispatch',
      label: 'Entrega'
    },
    {
      value: 'pickUp',
      label: 'Retirada no local'
    },
  ]

  const paymentsMethods = [
    {
      value: 'creditCard',
      label: 'Cartão de Crédito'
    },
    {
      value: 'debitCard',
      label: 'Cartão de Débito'
    },
    {
      value: 'pix',
      label: 'Pix'
    },
    {
      value: 'cash',
      label: 'Dinheiro'
    },
  ]

  useEffect(() => modal === true ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset' , [modal])

  const contextValue = {
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
    currentDate,
    currentTime,
    deliveryMethods,
    paymentsMethods,
  }
  
  return(
    <NewOrderContext.Provider value={contextValue}>
      { children }
    </NewOrderContext.Provider>
  )
}

export default NewOrderProvider