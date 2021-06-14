import { useState } from "react";
import './flavorsTable.css'
import { AiFillPlusSquare } from 'react-icons/ai'

const FlavorsTable = ({inputFunction}) => {
  const [flavorsCount, setFlavorsCount] = useState([1])
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)

  const addNewFlavor = () => {
    setFlavorsCount([...flavorsCount, (flavorsCount[flavorsCount.length -1] + 1)])
  }

  const exportFlavor = () => {
    const obj = {
      name,
      price,
    }
    inputFunction(obj)
  }

  const getFlavorName = (event) => {
    setName(event.currentTarget.value)
    exportFlavor()
  }

  const getFlavorPrice = (event) => {
    setPrice(event.currentTarget.value)
    exportFlavor()
  }


  return (
    <div>
      <p className='tableTitle'>Sabores</p>
      <table className='flavorsNewProduct'>
        <thead>
          <tr id='flavorsNewProductHeader'>
            <th>Sabor</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
        {flavorsCount.map((current) => {
          return (
            <tr key={current}>
              <td>
                <input type='text' placeholder='Sabor' onChange={getFlavorName}/>
              </td>
              <td className='inputPrice'>
                <span>R$</span>
                <input type='number' placeholder='0,00' onChange={getFlavorPrice}/>
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>
      <AiFillPlusSquare className='addNewFlavorButton' onClick={addNewFlavor}/>
    </div>
  )
}

export default FlavorsTable
