import './newOrder.css'
import NewOrderButtons from './newOrderButtons'
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
            <NewOrderButtons buttonName="Salvar"/>
            <NewOrderButtons buttonName={<RiPrinterFill className="newOrderButtonIcon"/>}/>
            <NewOrderButtons buttonName={<MdDelete className="newOrderButtonIcon"/>}/>
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