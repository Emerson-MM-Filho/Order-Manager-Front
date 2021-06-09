import './newProduct.css'

import ContentContainer from "../ui/contentContainer";
import MainButton from "../ui/mainButton";

const NewProduct = ({clicked}) => {

  const buttonClicked = element => clicked(element)

  return (
    <div>
      <ContentContainer sectionTitle="Produtos" contentTitle="Novo Produto">
        {<MainButton buttonName='Salvar' buttonValue='saveProduct'/>}
        {<MainButton buttonName='Cancelar' buttonValue='cancelAddProduct' functionOnClick={buttonClicked}/>}
      </ContentContainer>
      <div className='cardsContainer'>

      </div>
    </div>
  )
}

export default NewProduct