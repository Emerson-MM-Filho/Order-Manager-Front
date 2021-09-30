import React from 'react'
import './style.scss'

import SquareImage from '../SquareImage'

function TableDataRowOrderDetails({data}) {
  const { name, type, quantity, option: {optionName, price, image} } = data

  const optionType = type === 'Wheight' ? 'Kg' : 'Uni.'
  const optionPrice = `R$ ${price.toFixed(2).replace('.', ',')} / ${optionType}`
  const optionTotalPrice = `R$ ${(quantity*price).toFixed(2).replace('.', ',')}`

  return(
    <tr className='table-data-row-order-details'>
      <td><SquareImage image={image} altText={optionName} /></td>
      <td>
        <div>
          <p className='highlight'>{name}</p>
          <p className='normal'>{optionPrice}</p>
        </div>
      </td>
      <td className='normal'>
        {optionName}
      </td>
      <td className='normal'>
        {type === 'Wheight' ? `${quantity.toFixed(3).replace('.', ',')} Kg` : `${quantity} Uni.`}
      </td>
      <td className='normal'>
        {optionTotalPrice}
      </td>
    </tr>
  )
}

export default TableDataRowOrderDetails