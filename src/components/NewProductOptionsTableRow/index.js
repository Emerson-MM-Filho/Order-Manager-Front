import React from 'react'

import InputComponent from '../InputComponent'
import SquareImage from '../SquareImage'
import ButtonIcon from '../ButtonIcon'

import { trashIcon } from '../../icons'

function NewProductOptionsTableRow() {
  return (
    <tr>
      <td><SquareImage /></td>
      <td><InputComponent /></td>
      <td><InputComponent /></td>
      <td><ButtonIcon icon={trashIcon} color='red'/></td>
    </tr>
  )
}

export default NewProductOptionsTableRow