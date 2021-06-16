import './productCard.css'

const ProductCard = ({name, description, price, type, image}) => {

  return (
    <div className='productCard'>
      <div className='productImage'>
        <img src={image} alt="Foto do produto"/>
      </div>
      <div className='cardTextContainer'>
        <h1>{name}</h1>
        <p>{description}</p>
        <h2>R$ {price} / {type}</h2>
      </div>
      <div>
        <button className='productEditButton'>Editar</button>
      </div>
    </div>
  )
}

export default ProductCard