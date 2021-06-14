import './selectInput.css'

function SelectInput({name, allOptions, inputFunction}) {

  const getValue = (event) => {
    inputFunction(event.currentTarget.value)
  }

  return (
    <label htmlFor={name} className="inputText">
      {name}
      <select id={name} onChange={getValue}> {allOptions.map((element, index) => <option value={element.value} key={index} id={index}>{element.name}</option>)}
      </select>
    </label>
  )
}

export default SelectInput