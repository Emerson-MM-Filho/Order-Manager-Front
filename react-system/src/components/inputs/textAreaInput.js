import './textAreaInput.css'

function TextAreaInput ({name, placeholderInput}) {
  return (
    <label htmlFor={name} className="textAreaLabel">
      {name}
      <textarea id={name} placeholder={placeholderInput}/>
    </label>
  )
}

export default TextAreaInput