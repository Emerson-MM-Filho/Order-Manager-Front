import './textInput.css'

function textInput({name, placeholderInput, inputFunction}) {

  const getValue = (event) => {
    inputFunction(event.currentTarget.value)
  }

  return (
    <label htmlFor={name} className="inputText">
      {name}
      <input type="text" id={name} placeholder={placeholderInput} onChange={getValue}/>
    </label>
  )
}

export default textInput