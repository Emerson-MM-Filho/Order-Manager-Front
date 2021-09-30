import React, { useState, useContext } from 'react'
import { useDispatch } from 'react-redux'
import './style.scss'

import { recieveOrderFormInputAction } from '../../redux/actions/newOrder'

import newOrderContext from '../../context/newOrder/newOrderContext'
import DefaultContainer from '../DefaultContainer'
import LabelWithInput from '../LabelWithInput'
import LabelWithSelect from '../LabelWithSelect'

function NewOrderForm() {
  const dispatch = useDispatch()

  const {setDeliveryMethod, showDateTime, setShowDateTime, currentDate, currentHour, deliveryMethods, paymentsMethods} = useContext(newOrderContext)
  
  const [shippingDate, setShippingDate] = useState(currentDate)
  const [shippingHour, setShippingHour] = useState(currentHour)
  const [showAddress, setShowAddress] = useState(true)
  const [paymentStatus, setPaymentStatus] = useState(false)

  const showAddressForm = ({target}) => {
    if(target.value === 'dispatch') {
      setShowAddress(true)
    } else {
      setShowAddress(false)
    }
    setDeliveryMethod(target.value)
  }

  const handleChange = ({ target: { value, name } }) => {
    dispatch(recieveOrderFormInputAction(name, value))
  }

  const handleClick = ({ target: { name } }) => {
    setPaymentStatus(!paymentStatus)
    dispatch(recieveOrderFormInputAction(name, !paymentStatus))
  }

  return (
    <DefaultContainer addClass='new-order-form'>
      <h2>Detalhes da Entrega</h2>
      <div>
        <LabelWithInput
          type='text'
          label='Nome'
          text='Insira o Nome'
          name='clientName'
          onChange={(event) => handleChange(event)}
        />
        <LabelWithInput
          type='text'
          label='Telefone'
          text='Insira o Telefone'
          name='clientPhone'
          onChange={(event) => handleChange(event)}
        />
        <LabelWithSelect
          options={paymentsMethods}
          text='Método de Pagamento'
          name='paymentMethod'
          onChange={(event) => handleChange(event)}
        />
        <LabelWithInput
          type='checkbox'
          label='Este pedido está pago?'
          addClass='inline-label'
          name='paymentStatus'
          value={paymentStatus}
          onChange={handleClick}
        />
        <LabelWithSelect
          options={deliveryMethods}
          text='Método de Entrega'
          name='deliveryMethod'
          onClick={(event) => showAddressForm(event)}
          onChange={(event) => handleChange(event)}
        />
        {showAddress && (
          <div>
            <LabelWithInput
              type='text'
              label='Endereço'
              text='Insira o Endereço de Entrega'
              name='addressStreet'
              onChange={(event) => handleChange(event)}
            />
            <div className='inline-input'>
              <LabelWithInput 
                type='number'
                label='Número'
                text='Insira o Número'
                addClass='inline'
                name='addressNumber'
                onChange={(event) => handleChange(event)}
              />
              <LabelWithInput
                type='text'
                label='Bairro'
                text='Insira o Bairro'
                addClass='inline'
                name='addressDistrict'
                onChange={(event) => handleChange(event)}
              />
            </div>
            <LabelWithInput
              type='text'
              label='Complemento'
              text='Insira o Complemento'
              name='addressComplement'
              onChange={(event) => handleChange(event)}
            />
          </div>
        )}
        <LabelWithInput
          type='checkbox'
          label='Este pedido é uma encomenda?'
          addClass='inline-label'
          onClick={() => setShowDateTime(!showDateTime)}
        />
        {showDateTime && (
          <div className='inline-input'>
            <LabelWithInput
              type='date'
              label='Data de Entrega'
              text='Data de Entrega'
              addClass='inline'
              name='deliveryDate'
              min={currentDate}
              value={shippingDate}
              onChange={(event) => {
                handleChange(event)
                setShippingDate(event.target.value)
              }}
            />
            <LabelWithInput
              type='time'
              label='Hora de Entrega'
              text='Hora de Entrega'
              addClass='inline'
              name='deliveryTime'
              value={shippingHour}
              onChange={(event) => {
                handleChange(event)
                setShippingHour(event.target.value)
              }}
            />
          </div>
        )}
        <LabelWithInput
          type='text'
          label='Anotação'
          text='Insira uma anotação ao pedido'
          name='note'
          onChange={(event) => handleChange(event)}
        />
      </div>
    </DefaultContainer>
  )
}

export default NewOrderForm