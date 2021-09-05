import React from 'react'
import './style.scss'

import SquareImage from '../SquareImage'
import InputNumber from '../InputNumber'
import { trashIcon } from '../../icons'

function NewOrderTableRow({product, handleDelete}) {
  const handleClick = () => {
    handleDelete(product)
  }
   return (
    <tr key={product.options.id} className='new-order-product-row'>
      <td><SquareImage image={product.options.image} /></td>
      <td>
        <div className='product-option'>
          <p>
            {product.name}
          </p>
          <p className='option-selected'>
            Opção:
            <span>
              {product.options.optionName}
            </span>
          </p>
        </div>
      </td>
      <td>R$ {product.options.price.toFixed(2).replace('.',',')}</td>
      <td><InputNumber quantity={product.quantity} /></td>
      <td>R$ {product.options.price.toFixed(2).replace('.',',')}</td>
      <td>
        <button onClick={handleClick}>
          {trashIcon}
        </button>
        </td>
    </tr>
  )
}

export default NewOrderTableRow