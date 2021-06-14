import './radioInput.css'

const RadioInput = ({label, id, name, value, inputFunction}) => {
  const getValue = (event) => {
    inputFunction(event.currentTarget.value)
  }

  return (
    <label htmlFor={id} className='inputRadioLabel'>
      {label}
      <input type='radio' id={id} name={name} value={value} className='inputTypeProduct' onClick={getValue}/>
      <span className='inputRadioStyle'/>
    </label>
  )
}

export default RadioInput