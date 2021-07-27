import { useState } from "react";
import './flavorsTable.css'
import { AiFillPlusSquare } from 'react-icons/ai'
import { BsX } from 'react-icons/bs'

const FlavorsTable = ({inputFunction}) => {

  const flavorId = () => Math.floor((Math.random() * 1000000))

  const [flavorsCount, setFlavorsCount] = useState([flavorId()])
  const [allFlavors, setAllFlavors] = useState([{id: flavorsCount[0], name: '', price: 0}])

  const addNewFlavor = () => {
    const id = flavorId()
    const obj = {
      id,
      name: '',
      price: 0,
    }
    setFlavorsCount([...flavorsCount, id])
    setAllFlavors([...allFlavors, obj])
  }

  const exportFlavor = (flavors) => {
    if (typeof flavors !== 'undefined') {
      return inputFunction(flavors)
    }
    inputFunction(allFlavors)
  }

  const editFlavorObj = ({id, key, value}) =>{
    const copy = [...allFlavors]

    const findObj = copy.find((current) => current.id === id)
    const indexObj = copy.indexOf(findObj)
    copy[indexObj][key] = value
    setAllFlavors(copy)
    exportFlavor(copy)
  }

  const getFlavorName = (event) => {
    const currentObjId = parseInt(event.currentTarget.id.split('-')[1])
    const value = event.currentTarget.value

    const obj = {
      id: currentObjId,
      key: 'name',
      value
    }

    editFlavorObj(obj)
  }

  const getFlavorPrice = (event) => {
    const currentObjId = parseInt(event.currentTarget.id.split('-')[1])
    const value = event.currentTarget.value

    const obj = {
      id: currentObjId,
      key: 'price',
      value
    }

    editFlavorObj(obj)
  }

  const removeFlavor = (event) => {
    if (flavorsCount.length === 1) {
      return alert('[ERRO] O produto deve conter ao menos um sabor!')
    }

    const currentObjId = parseInt(event.currentTarget.id)

    const copyFlavors = [...allFlavors]

    const findObj = copyFlavors.find((current) => current.id === currentObjId)
    const indexObj = copyFlavors.indexOf(findObj)

    copyFlavors.splice(indexObj, 1)

    setAllFlavors(copyFlavors)
    exportFlavor(copyFlavors)


    const copyCount = flavorsCount
    const findCounter = copyCount.find((current) => current === currentObjId)
    const indexCounter = copyCount.indexOf(findCounter)
    copyCount.splice(indexCounter, 1)

    setFlavorsCount(copyCount)
  }

  const renderInputs = (quantity) => {
    return quantity.map((current) => {
      return (
        <tr key={current} datatype={current}>
          <td>
            <input
              type='text'
              placeholder='Sabor'
              id={`flavorName-${current}`}
              onChange={getFlavorName}
            />
          </td>
          <td className='inputPrice'>
            <span>R$</span>
            <input
              type='number'
              placeholder='0,00'
              id={`flavorPrice-${current}`}
              onChange={getFlavorPrice}
            />
            <BsX
              id={current}
              onClick={removeFlavor}
            />
          </td>
        </tr>
      )
    })
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
        {renderInputs(flavorsCount)}
        </tbody>
      </table>
      <AiFillPlusSquare
        className='addNewFlavorButton'
        onClick={addNewFlavor}
      />
    </div>
  )
}

export default FlavorsTable
