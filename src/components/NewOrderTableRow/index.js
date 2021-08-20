import React from 'react'
import './style.scss'

import SquareImage from '../SquareImage'
import InputNumber from '../InputNumber'

function NewOrderTableRow({product}) {
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
      <td><InputNumber/></td>
      <td>R$ {product.options.price.toFixed(2).replace('.',',')}</td>
    </tr>
  )
}

export default NewOrderTableRow