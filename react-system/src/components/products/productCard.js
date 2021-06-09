import './productCard.css'

const ProductCard = ({name, description, price, type}) => {

  return (
    <div className='productCard'>
      <div className='productImage'/>
      <div className='cardTextContainer'>
        <h1>{name}</h1>
        <p>{description}</p>
        <h2>R$ {price},00 / {type}</h2>
      </div>
      <div>
        <button className='productEditButton'>Editar</button>
      </div>
    </div>
  )
}

export default ProductCard