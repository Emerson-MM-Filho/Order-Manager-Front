import React from 'react'
import './style.scss'

import DefaultContainer from '../DefaultContainer'
import LabelWithInput from '../LabelWithInput'
import LabelWithSelect from '../LabelWithSelect'

function NewProductForm() {
  const categories = [
    {
      value: 'cake',
      label: 'Bolo'
    },
    {
      value: 'pie',
      label: 'Torta'
    },
    {
      value: 'sugarplum',
      label: 'Bombom'
    },
    {
      value: 'candy',
      label: 'Bala'
    },
  ]
  return (
    <DefaultContainer addClass='small-container'>
      <div className='new-product-form-container'>
        <h2>Detalhes do Produto</h2>
        <LabelWithInput type='text' label='Nome' text='Nome do Produto'/>
        <label className='type-label'>
          Tipo:
          <div className='type-container'>
            <LabelWithInput type='radio' label='Unidade' addClass='radio-button'/>
            <LabelWithInput type='radio' label='Quilo' addClass='radio-button'/>
          </div>
        </label>
        <LabelWithInput type='text' label='Descrição' text='Descrição do Produto'/>
        <LabelWithSelect text='Categoria' options={categories}/>
      </div>
    </DefaultContainer>
  )
}

export default NewProductForm