import './sendDetails.css'

import TextInput from '../inputs/textInput'
import SelectInput from '../inputs/selectInput'
import InputDate from '../inputs/inputDate'
import InputHour from '../inputs/inputHour'

function sendDetails() {
  const payment = ['Dinheiro', 'Cartão']

  return (
    <div id="inlineContainer">
      <div id="sendDetails">
        <h4>Pedido</h4>
        <div id="inlineInput">
          <InputDate forLabel="orderInputDate"/>
          <InputHour forLabel="orderInputHour"/>
        </div>
        <SelectInput name="Pagamento" allOptions={payment}/>
        <TextInput name="Receber" placeholderInput="R$ 50,00"/>
        <TextInput name="Troco" placeholderInput="R$ 15,00"/>
      </div>
    </div>
  )
}

export default sendDetails
