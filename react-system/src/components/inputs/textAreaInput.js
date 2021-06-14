import './textAreaInput.css'

function TextAreaInput ({name, placeholderInput, inputFunction}) {
  const getValue = (event) => {
    inputFunction(event.currentTarget.value)
  }
  return (
    <label htmlFor={name} className="textAreaLabel">
      {name}
      <textarea id={name} placeholder={placeholderInput} onChange={getValue}/>
    </label>
  )
}

export default TextAreaInput