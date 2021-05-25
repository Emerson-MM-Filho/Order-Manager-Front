import './newOrder.css'
import NewOrderButtons from './newOrderButtons'
import OrderInputContainer from './orderInputContainer'
import SendDetails from './sendDetails'

import { RiPrinterFill } from 'react-icons/ri'
import { MdDelete } from 'react-icons/md'

function newOrder() {


  return (
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
      <SendDetails/>
        <div id="orderDetails">

        </div>
    </div>
  )
}

export default newOrder