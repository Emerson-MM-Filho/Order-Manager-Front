import './sendDetails.css'

import TextInput from "./textInput";
import SelectInput from "./selectInput";

function sendDetails() {
  const payment = ['Dinheiro', 'Cartão']

  return (
    <div id="inlineContainer">
      <div id="sendDetails">
        <h4>Pedido</h4>
        <div id="inlineInput">
          <TextInput name="Data" placeholderInput="17/05/2021"/>
          <TextInput name="Hora" placeholderInput="16:30"/>
        </div>
        <SelectInput name="Pagamento" allOptions={payment}/>
        <TextInput name="Receber" placeholderInput="R$ 50,00"/>
        <TextInput name="Troco" placeholderInput="R$ 15,00"/>
      </div>
    </div>
  )
}

export default sendDetails
