import './orderInputContainer.css'

import TextInput from '../inputs/textInput'
import SelectInput from '../inputs/selectInput'

function orderInputContainer() {

  const sendType = ['Delivery', 'Retirar no local']
  const district = ['Village', 'Centro']

  return (
    <div>
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

export default orderInputContainer
