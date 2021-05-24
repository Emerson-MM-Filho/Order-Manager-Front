import './newOrder.css'
import NewOrderButtons from './newOrderButtons'
import TextInput from './textInput'
import SelectInput from "./selectInput";

import { RiPrinterFill } from 'react-icons/ri'
import { MdDelete } from 'react-icons/md'

function newOrder() {

  const sendType = ['Delivery', 'Retirar no local']
  const district = ['Village', 'Centro']

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
      <div className="orderInputContainer">
        <TextInput name="Nome" placeholderInput="Nome do cliente"/>
        <TextInput name="Telefone" placeholderInput="Telefone de contato"/>
        <SelectInput name="Entrega" allOptions={sendType}/>
      </div>
      <div className="orderInputContainer">
        <TextInput name="Endereço" placeholderInput="Endereço de entrega"/>
        <TextInput name="Número" placeholderInput="Número da residência"/>
        <SelectInput name="Bairro" allOptions={district}/>
      </div>
    </div>
  )
}

export default newOrder