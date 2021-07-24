import './inputDate.css'

function inputDate() {
  return (
    <label htmlFor="inputDate" className="orderInputDate" >
      Data de entrega
      <input id="inputDate" type="date"/>
    </label>
  )
}

export default inputDate