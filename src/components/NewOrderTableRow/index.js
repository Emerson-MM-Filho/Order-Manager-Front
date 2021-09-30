import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import './style.scss'
import { addProductsAction } from '../../redux/actions/newOrder'
import ButtonIcon from '../ButtonIcon'
import SquareImage from '../SquareImage'
import InputNumber from '../InputNumber'
import { trashIcon } from '../../icons'

import newOrderContext from '../../context/newOrder/newOrderContext'

function NewOrderTableRow({product, handleDelete}) {
  const dispatch = useDispatch()
  const { setProducts, products } = useContext(newOrderContext)

  const handleClick = () => {
    handleDelete(product)
  }

  const handleQuantity = (newQuantity) => {
    const incrementedProduct = {
      ...product,
      quantity: newQuantity,
    }
    const newProducts = []
    products.forEach(current => {
      if (current.option.id === incrementedProduct.option.id && current.id === incrementedProduct.id) return newProducts.push(incrementedProduct)
      return newProducts.push(current)
    })
    setProducts(newProducts)
    dispatch(addProductsAction(newProducts))
  }
   return (
    <tr key={product.option.id} className='new-order-product-row'>
      <td><SquareImage image={product.option.image} /></td>
      <td>
        <div className='product-option'>
          <p>
            {product.name}
          </p>
          <p className='option-selected'>
            Opção:
            <span>
              {product.option.optionName}
            </span>
          </p>
        </div>
      </td>
      <td>R$ {product.option.price.toFixed(2).replace('.',',')}</td>
      <td><InputNumber quantity={product.quantity} func={handleQuantity} /></td>
      <td>R$ {(product.option.price * product.quantity).toFixed(2).replace('.',',')}</td>
      <td>
        <ButtonIcon onClick={handleClick} icon={trashIcon} />
      </td>
    </tr>
  )
}

export default NewOrderTableRow