import './newOrder.css'
import MainButton from '../ui/mainButton'
import OrderInputContainer from './orderInputContainer'
import SendDetails from './sendDetails'
import OrderDetails from './orderDetails'


import { RiPrinterFill } from 'react-icons/ri'
import { MdDelete } from 'react-icons/md'
import SectionTitle from "../sectionTitle";

function newOrder() {

  return (
    <div>
      <SectionTitle title='Novo Pedido'/>
      <div id="newOrderContainer">
        <div id="newOrderHeader">
          <h4>Cliente / Entrega</h4>
          <div id="newOrderButtonsContainer">
            <MainButton buttonName="Salvar"/>
            <MainButton buttonName={<RiPrinterFill className="newOrderButtonIcon"/>}/>
            <MainButton buttonName={<MdDelete className="newOrderButtonIcon"/>}/>
          </div>
        </div>
        <OrderInputContainer/>
        <div id="sideBySideContainer">
          <SendDetails/>
          <OrderDetails/>
        </div>
      </div>
    </div>
  )
}

export default newOrder