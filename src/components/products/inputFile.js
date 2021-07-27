import './inputFile.css'

import { FaUpload } from 'react-icons/fa'

const InputFile = ({inputFunction}) => {

  const getImage = (event) => {
    inputFunction(event.currentTarget.value)
  }

  return (
    <div className='inputFile'>
      <p className='inputFileTitle'>Imagem</p>
      <label htmlFor='addNewFileButton'>
        <input type='file' id='addNewFileButton' onChange={getImage}/>
        <div className='spanButton'>{<FaUpload/>}</div>
        <div className='spanText'>Nenhum arquivo selecionado</div>
      </label>
    </div>
  )
}

export default InputFile