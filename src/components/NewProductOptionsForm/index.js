import React from 'react'
import './style.scss'

import DefaultContainer from '../DefaultContainer'
import NewProductOptionsTableRow from '../NewProductOptionsTableRow/index.js'

function NewProductOptionsForm() {
  return (
    <DefaultContainer addClass='larger-container'>
      <table>
        <thead>
          <tr>
            <th>Imagem</th>
            <th>Opção</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          <NewProductOptionsTableRow />
        </tbody>
      </table>
    </DefaultContainer>
  )
}

export default NewProductOptionsForm