import './textInput.css'

function textInput({name, placeholderInput}) {
  return (
    <label htmlFor={name} className="inputText">
      {name}
      <input type="text" id={name} placeholder={placeholderInput}/>
    </label>
  )
}

export default textInput