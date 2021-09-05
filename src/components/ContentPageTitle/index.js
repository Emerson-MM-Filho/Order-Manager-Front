import React from 'react'
import './style.scss'
import DefaultButton from '../../components/DefaultButton'

import { plusIcon } from '../../icons'

function ContentPageTitle({title}) {
  return (
    <div className='content-page-title'>
      <h1>{title}</h1>
      <DefaultButton icon={plusIcon} text='Salvar Pedido'/>
    </div>
  )
}

export default ContentPageTitle