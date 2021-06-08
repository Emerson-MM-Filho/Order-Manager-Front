import ContentContainer from "../ui/contentContainer";
import MainButton from "../ui/mainButton";
import {RiPrinterFill} from "react-icons/ri";

const Products = () => {
  return (
    <ContentContainer sectionTitle="Produtos" contentTitle="Todos os Produtos">
      {<MainButton buttonName='Salvar'/>}
      {<MainButton buttonName={<RiPrinterFill className="newOrderButtonIcon"/>}/>}
    </ContentContainer>
  )
}

export default Products