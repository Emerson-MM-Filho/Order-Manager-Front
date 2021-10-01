import React, { useState, useContext } from 'react'
import { useDispatch } from 'react-redux'
import './style.scss'

import { recieveOrderFormInputAction } from '../../redux/actions/newOrder'

import newOrderContext from '../../context/newOrder/newOrderContext'
import DefaultContainer from '../DefaultContainer'
import LabelWithInput from '../LabelWithInput'
import LabelWithSelect from '../LabelWithSelect'

function NewOrderForm({orderToEdit = false}) {
  const isAnEdition = orderToEdit ? true : false

  const dispatch = useDispatch()

  const {setDeliveryMethod, currentDate, currentTime, deliveryMethods, paymentsMethods} = useContext(newOrderContext)

  const [shippingDate, setShippingDate] = useState(isAnEdition ? orderToEdit.delivery.date : currentDate)
  const [shippingHour, setShippingHour] = useState(isAnEdition ? orderToEdit.delivery.time : currentTime)
  const [showAddress, setShowAddress] = useState(isAnEdition ? (orderToEdit.delivery.method === 'dispatch' ? true : false) : true)
  const [paymentStatus, setPaymentStatus] = useState(false)
  const [haveDeliveryTime, setHaveDeliveryTime] = useState(isAnEdition ? orderToEdit.delivery.haveDeliveryTime : false)
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

  const handlePaymentStatus = ({ target: { name } }) => {
    setPaymentStatus(!paymentStatus)
    dispatch(recieveOrderFormInputAction(name, !paymentStatus))
  }

  const handleDeliveryTime = ({ target: { name } }) => {
    setHaveDeliveryTime(!haveDeliveryTime)
    dispatch(recieveOrderFormInputAction(name, !haveDeliveryTime))
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
          inputValue={isAnEdition ? orderToEdit.client.name : ''}
          handleChange={(event) => handleChange(event)}
        />
        <LabelWithInput
          type='number'
          label='Telefone'
          text='Insira o Telefone'
          name='clientPhone'
          inputValue={isAnEdition ? orderToEdit.client.phone : ''}
          handleChange={(event) => handleChange(event)}
        />
        <LabelWithSelect
          options={paymentsMethods}
          text='Método de Pagamento'
          name='paymentMethod'
          selectedValue={isAnEdition ? orderToEdit.payment.method : ''}
          handleChange={(event) => handleChange(event)}
        />
        <LabelWithInput
          type='checkbox'
          label='Este pedido está pago?'
          addClass='inline-label'
          name='paymentStatus'
          inputValue={isAnEdition ? orderToEdit.payment.status : paymentStatus}
          checked={paymentStatus}
          handleChange={(event) => handlePaymentStatus(event)}
        />
        <LabelWithSelect
          options={deliveryMethods}
          text='Método de Entrega'
          name='deliveryMethod'
          selectedValue={isAnEdition ? orderToEdit.delivery.method : ''}
          handleChange={(event) => {
            handleChange(event)
            showAddressForm(event)
          }}
        />
        {showAddress && (
          <div>
            <LabelWithInput
              type='text'
              label='Endereço'
              text='Insira o Endereço de Entrega'
              name='addressStreet'
              inputValue={isAnEdition ? orderToEdit.client.address.street : ''}
              handleChange={(event) => handleChange(event)}
            />
            <div className='inline-input'>
              <LabelWithInput 
                type='number'
                label='Número'
                text='Insira o Número'
                addClass='inline'
                name='addressNumber'
                inputValue={isAnEdition ? orderToEdit.client.address.number : ''}
                handleChange={(event) => handleChange(event)}
              />
              <LabelWithInput
                type='text'
                label='Bairro'
                text='Insira o Bairro'
                addClass='inline'
                name='addressDistrict'
                inputValue={isAnEdition ? orderToEdit.client.address.district : ''}
                handleChange={(event) => handleChange(event)}
              />
            </div>
            <LabelWithInput
              type='text'
              label='Complemento'
              text='Insira o Complemento'
              name='addressComplement'
              inputValue={isAnEdition ? orderToEdit.client.address.complement : ''}
              handleChange={(event) => handleChange(event)}
            />
          </div>
        )}
        <LabelWithInput
          type='checkbox'
          label='Este pedido é uma encomenda?'
          addClass='inline-label'
          name='haveDeliveryTime'
          inputValue={haveDeliveryTime}
          checked={haveDeliveryTime}
          handleChange={(event) => handleDeliveryTime(event)}
        />
        {haveDeliveryTime && (
          <div className='inline-input'>
            <LabelWithInput
              type='date'
              label='Data de Entrega'
              text='Data de Entrega'
              addClass='inline'
              name='deliveryDate'
              min={currentDate}
              inputValue={isAnEdition ? orderToEdit.delivery.date : shippingDate}
              handleChange={(event) => {
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
              inputValue={isAnEdition ? orderToEdit.delivery.time : shippingHour}
              handleChange={(event) => {
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
          inputValue={isAnEdition ? orderToEdit.note : ''}
          handleChange={(event) => handleChange(event)}
        />
      </div>
    </DefaultContainer>
  )
}

export default NewOrderForm