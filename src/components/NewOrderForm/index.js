import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import './style.scss'

import { recieveOrderFormInputAction } from '../../redux/actions/newOrder'

import DefaultContainer from '../DefaultContainer'
import LabelWithInput from '../LabelWithInput'
import CustomerForm from '../CustomerForm'
import PaymentForm from '../PaymentForm'
import ShippingForm from '../ShippingForm'
import ShippingTimeForm from '../ShippingTimeForm'

function NewOrderForm({orderToEdit = false}) {
  const isAnEdition = orderToEdit ? true : false

  const dispatch = useDispatch()

  const handleChange = useCallback(({ target: { value, name } }) => {
    dispatch(recieveOrderFormInputAction(name, value))
  }, [dispatch])
   

  return (
    <DefaultContainer addClass='new-order-form'>
      <h2>Detalhes da Entrega</h2>
      <div>
        <CustomerForm
          order={orderToEdit}
          handleChange={handleChange}
        />
        <PaymentForm
          order={orderToEdit}
          handleChange={handleChange}
        />
        <ShippingForm
          order={orderToEdit}
          handleChange={handleChange}
        />
        <ShippingTimeForm
          order={orderToEdit}
          handleChange={handleChange}
        />
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