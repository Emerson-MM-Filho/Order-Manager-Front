import React, { useContext, useState, useCallback } from 'react'

import LabelWithInput from '../LabelWithInput'
import LabelWithSelect from '../LabelWithSelect'

import newOrderContext from '../../context/newOrder/newOrderContext'

function ShippingForm({order, handleChange}) {
  const { deliveryMethods } = useContext(newOrderContext)

  const [showAddress, setShowAddress] = useState(order ? (order.delivery.method === 'dispatch' ? true : false) : true)

  const showAddressForm = useCallback(({target}) => {
    target.value === 'dispatch' ? setShowAddress(true) : setShowAddress(false)
  }, [])

  return (
    <>
      <LabelWithSelect
        options={deliveryMethods}
        text='Método de Entrega'
        name='deliveryMethod'
        selectedValue={order ? order.delivery.method : ''}
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
            inputValue={order ? order.client.address.street : ''}
            handleChange={(event) => handleChange(event)}
          />
          <div className='inline-input'>
            <LabelWithInput 
              type='number'
              label='Número'
              text='Insira o Número'
              addClass='inline'
              name='addressNumber'
              inputValue={order ? order.client.address.number : ''}
              handleChange={(event) => handleChange(event)}
            />
            <LabelWithInput
              type='text'
              label='Bairro'
              text='Insira o Bairro'
              addClass='inline'
              name='addressDistrict'
              inputValue={order ? order.client.address.district : ''}
              handleChange={(event) => handleChange(event)}
            />
          </div>
          <LabelWithInput
            type='text'
            label='Complemento'
            text='Insira o Complemento'
            name='addressComplement'
            inputValue={order ? order.client.address.complement : ''}
            handleChange={(event) => handleChange(event)}
          />
        </div>
      )}
    </>
  )
}

export default ShippingForm