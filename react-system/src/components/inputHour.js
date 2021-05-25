import './inputHour.css'

function inputHour() {
  return (
    <label for="orderInputHour" className="orderInputHour">
      Hora de entrega
      <input type="time" id="orderInputHour"/>
    </label>
  )

}

export default inputHour