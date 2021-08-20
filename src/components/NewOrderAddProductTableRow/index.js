import React, { useState } from 'react'
import './style.scss'

import SquareImage from '../SquareImage'
import SelectComponent from '../SelectComponent'
import InputComponent from '../InputComponent'

function NewOrderAddProductTableRow({product, handleClick}) {
  const [productOption, setProductOption] = useState(product.options[0])
  const [selected, setSelected] = useState(false)

  const handleSelect = ({target: {value}}) => {
    setProductOption(product.options.filter((current) => current.id === parseInt(value))[0])
  }

  const addProduct = (product) => {
    setSelected(!selected)
    handleClick({
      ...product,
      options: productOption,
    })
  }

  return (
    <tr key={product.id} className={`product-table-row ${selected && 'product-selected'}`}>
      <td><SquareImage image={productOption.image}/></td>
      <td>{product.name}</td>
      <td>
        <SelectComponent
          onClick={(event) => handleSelect(event)}
          options={product.options.map((option) => (
            {value: option.id, label: option.optionName}
          ))}
        />
      </td>
      <td>{`R$ ${productOption.price.toFixed(2).replace('.', ',')} / ${product.type === 'Wheight' ? 'Kg' : 'Uni.'}`}</td>
      <td><InputComponent type='checkbox' onClick={() => addProduct(product)}/></td>
    </tr>
  )
}

export default NewOrderAddProductTableRow