import React, { useContext } from 'react'
import './style.scss'

import newOrderContext from '../../context/newOrder/newOrderContext'
import DefaultContainer from '../DefaultContainer'
import LabelWithInput from '../LabelWithInput'
import LabelWithSelect from '../LabelWithSelect'

function NewOrderForm() {
  const {showAddress, setShowAddress, setDeliveryMethod, showDateTime, setShowDateTime} = useContext(newOrderContext)

  const showAddressForm = ({target}) => {
    if(target.value === 'dispatch') {
      setShowAddress(true)
    } else {
      setShowAddress(false)
    }
    setDeliveryMethod(target.value)
  }

  const showDateTimeForm = ({target}) => {
    setShowDateTime(!showDateTime)
  }

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

  return (
    <DefaultContainer addClass='new-order-form'>
      <h2>Detalhes da Entrega</h2>
      <div>
        <LabelWithInput type='text' label='Nome' text='Insira o Nome'/>
        <LabelWithInput type='text' label='Telefone' text='Insira o Telefone'/>
        <LabelWithSelect options={paymentsMethods} text='Método de Pagamento' />
        <LabelWithInput
          type='checkbox'
          label='Este pedido está pago?'
          addClass='inline-label'
        />
        <LabelWithSelect
          options={deliveryMethods}
          text='Método de Entrega'
          onClick={(event) => showAddressForm(event)}
        />
        {showAddress && (
          <div>
            <LabelWithInput type='text' label='Endereço' text='Insira o Endereço de Entrega'/>
            <div className='inline-input'>
              <LabelWithInput type='number' label='Número' text='Insira o Número' addClass='inline'/>
              <LabelWithInput type='text' label='Bairro' text='Insira o Bairro' addClass='inline'/>
            </div>
            <LabelWithInput type='text' label='Complemento' text='Insira o Complemento'/>
          </div>
        )}
        <LabelWithInput
          type='checkbox'
          label='Este pedido é uma encomenda?'
          addClass='inline-label'
          onClick={(event) => showDateTimeForm(event)}
        />
        {showDateTime && (
          <div className='inline-input'>
            <LabelWithInput type='date' label='Data de Entrega' text='Data de Entrega' addClass='inline'/>
            <LabelWithInput type='time' label='Hora de Entrega' text='Hora de Entrega' addClass='inline'/>
          </div>
        )}
        <LabelWithInput type='text' label='Anotação' text='Insira uma anotação ao pedido'/>
      </div>
    </DefaultContainer>
  )
}

export default NewOrderForm