import React, { useState } from 'react'

import SquareImage from '../SquareImage'
import SelectComponent from '../SelectComponent'
import InputComponent from '../InputComponent'

function NewOrderAddProductTableRow({product}) {
  const [productOption, setProductOption] = useState(product.options[0])

  const handleSelect = ({target: {value}}) => {
    setProductOption(product.options.filter((current) => current.id === parseInt(value))[0])
  }

  return (
    <tr key={product.id}>
      <td><SquareImage image={productOption.image}/></td>
      <td>
        <SelectComponent
          onClick={(event) => handleSelect(event)}
          options={product.options.map((option) => (
            {value: option.id, label: option.optionName}
          ))}
        />
      </td>
      <td>{product.description}</td>
      <td>{productOption.price}</td>
      <td><InputComponent type='checkbox'/></td>
    </tr>
  )
}

export default NewOrderAddProductTableRow