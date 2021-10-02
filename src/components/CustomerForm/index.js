import React from 'react'

import LabelWithInput from '../LabelWithInput'

function CustomerForm({order, handleChange}) {
  return (
    <>
      <LabelWithInput
        type='text'
        label='Nome'
        text='Insira o Nome'
        name='clientName'
        inputValue={order ? order.client.name : ''}
        handleChange={(event) => handleChange(event)}
      />
      <LabelWithInput
        type='number'
        label='Telefone'
        text='Insira o Telefone'
        name='clientPhone'
        inputValue={order ? order.client.phone : ''}
        handleChange={(event) => handleChange(event)}
      />
    </>
  )
}

export default CustomerForm