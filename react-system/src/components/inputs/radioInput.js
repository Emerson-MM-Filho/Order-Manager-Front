import './radioInput.css'

const RadioInput = ({label, id, name, value}) => {
  return (
    <label htmlFor={id} className='inputRadioLabel'>
      {label}
      <input type='radio' id={id} name={name} value={value} className='inputTypeProduct' />
      <span className='inputRadioStyle'/>
    </label>
  )
}

export default RadioInput