import React from 'react'
import './style.scss'

import DefaultContainer from '../DefaultContainer'
import LabelWithInput from '../LabelWithInput'

function NewOrderForm() {
  return (
    <DefaultContainer addClass='new-order-form'>
      <h2>Detalhes da Entrega</h2>
      <div>
        <LabelWithInput type='text' label='Nome' text='Insira o nome'/>
      </div>
    </DefaultContainer>
  )
}

export default NewOrderForm