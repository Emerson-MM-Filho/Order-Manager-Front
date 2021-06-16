import './allProducts.css'

import ContentContainer from "../ui/contentContainer";
import MainButton from "../ui/mainButton";
import {RiPrinterFill} from "react-icons/ri";
import ProductCard from "./productCard";

const AllProducts = ({clicked, allProducts}) => {

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
              image={current.image}
              name={current.productName}
              description={current.productDescription}
              price={parseFloat(current.flavors[0].price).toFixed(2)}
              type={(current.productType === 'unity') ? 'Uni.' : 'Kg'}
              key={index}
            />
          )
        })
        }
      </div>
    </div>
  )
}

export default AllProducts