import './allProducts.css'

import ContentContainer from "../ui/contentContainer";
import MainButton from "../ui/mainButton";
import {RiPrinterFill} from "react-icons/ri";
import ProductCard from "./productCard";

const AllProducts = ({clicked, allProducts, productToEdit}) => {

  const productClick = (value, id) => {
    buttonClicked(value)
    productToEdit(id)
  }

  const buttonClicked = element => clicked(element)

  return (
    <div>
      <ContentContainer sectionTitle="Produtos" contentTitle="Todos os Produtos">
        {<MainButton buttonName='Adicionar' buttonValue='addProduct' functionOnClick={buttonClicked}/>}
        {<MainButton buttonName={<RiPrinterFill className="newOrderButtonIcon"/>} buttonValue='printListProduct' functionOnClick={buttonClicked}/>}
      </ContentContainer>
      <div className='cardsContainer'>
        {allProducts.length !== 0 &&
        allProducts.map((current, index) => {
          return (
            <ProductCard
              id={current.id}
              image={current.image}
              name={current.productName}
              description={current.productDescription}
              price={parseFloat(current.flavors[0].price).toFixed(2)}
              type={(current.productType === 'unity') ? 'Uni.' : 'Kg'}
              key={index}
              clickFunction={productClick}
            />
          )
        })
        }
      </div>
    </div>
  )
}

export default AllProducts