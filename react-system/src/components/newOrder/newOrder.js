import './newOrder.css'
import ContentContainer from "../ui/contentContainer";
import MainButton from '../ui/mainButton'
import OrderInputContainer from './orderInputContainer'
import SendDetails from './sendDetails'
import OrderDetails from './orderDetails'


import { RiPrinterFill } from 'react-icons/ri'
import { MdDelete } from 'react-icons/md'

function newOrder() {

  return (
    <div>
      <ContentContainer sectionTitle="Novo Pedido" contentTitle="Client / Entrega">
        {<MainButton buttonName="Salvar" buttonValue='saveNewOrder'/>}
        {<MainButton buttonName={<RiPrinterFill className="newOrderButtonIcon"/>} buttonValue='printNewOrder'/>}
        {<MainButton buttonName={<MdDelete className="newOrderButtonIcon"/>} buttonValue='clearFormNewOrder'/>}
      </ContentContainer>
      <OrderInputContainer/>
      <div id="sideBySideContainer">
        <SendDetails/>
        <OrderDetails/>
      </div>
    </div>
  )
}

export default newOrder