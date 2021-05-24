import './newOrder.css'
import NewOrderButtons from './newOrderButtons'

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
    </div>
  )
}

export default newOrder