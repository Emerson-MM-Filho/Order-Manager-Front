import SectionTitle from "../sectionTitle";
import MainButton from "../ui/mainButton";
import {RiPrinterFill} from "react-icons/ri";

const Products = () => {
  return (
    <div>
      <SectionTitle title='Produtos'/>
      <div className="internSection">
        <div className="internSectionHeader">
          <h4>Todos os Produtos</h4>
          <div className="newOrderButtonsContainer">
            <MainButton buttonName='Salvar'/>
            <MainButton buttonName={<RiPrinterFill className="newOrderButtonIcon"/>}/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Products