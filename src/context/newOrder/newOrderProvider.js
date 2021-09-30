import React, { useState, useEffect } from 'react'
import NewOrderContext from './newOrderContext'

function NewOrderProvider({children}) {
  const [deliveryMethod, setDeliveryMethod] = useState('dispatch')
  const [showDateTime, setShowDateTime] = useState(false)
  const [products, setProducts] = useState([])
  const [modal, setModal] = useState(false)
  const [clientForm, setClientForm] = useState({})

  const newDate = new Date()
  const day = newDate.getDate()
  const month = newDate.getMonth()+1
  const year = newDate.getFullYear()
  const hour = newDate.getHours()
  const minutes = newDate.getMinutes()

  const currentDate = `${year}-${month < 10 ? `0${month}` : month}-${day}`
  const currentHour = `${hour}:${minutes}`

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
    currentHour,
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