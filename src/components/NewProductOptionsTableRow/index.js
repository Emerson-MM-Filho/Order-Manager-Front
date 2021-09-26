import React from 'react'

import InputComponent from '../InputComponent'
import SquareImage from '../SquareImage'

function NewProductOptionsTableRow() {
  return (
    <tr>
      <td><SquareImage /></td>
      <td><InputComponent /></td>
      <td><InputComponent /></td>
    </tr>
  )
}

export default NewProductOptionsTableRow