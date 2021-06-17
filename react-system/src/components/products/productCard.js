import './productCard.css'

const ProductCard = ({id, name, description, price, type, image, clickFunction}) => {

  const editProduct = event => {
    clickFunction(event.currentTarget.value, id)
  }

  return (
    <div className='productCard' id={id}>
      <div className='productImage'>
        <img src={image} alt="Foto do produto"/>
      </div>
      <div className='cardTextContainer'>
        <h1>{name}</h1>
        <p>{description}</p>
        <h2>R$ {price} / {type}</h2>
      </div>
      <div>
        <button className='productEditButton' value='editProduct' onClick={editProduct}>Editar</button>
      </div>
    </div>
  )
}

export default ProductCard