import { useState } from "react";
import './newProduct.css'

import ContentContainer from "../ui/contentContainer";
import MainButton from "../ui/mainButton";
import TextInput from "../inputs/textInput"
import RadioInput from "../inputs/radioInput";
import SelectInput from "../inputs/selectInput";
import TextAreaInput from "../inputs/textAreaInput";
import FlavorsTable from "./flavorsTable";
import InputFile from "./inputFile";

const NewProduct = ({clicked}) => {


  const cancel = element => clicked(element)

  const creteId = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyz'

    let id = ''
    for (let qtdLetter = 0; qtdLetter < 5 + 1; qtdLetter += 1) {
      const index = Math.floor(Math.random()*characters.length)
      const number1 = Math.floor(Math.random()*10)
      const number2 = Math.floor(Math.random()*10)
      const number3 = Math.floor(Math.random()*10)
      id += characters[index] + '-' + number1 + number2 + number3
    }
    return id
  }

  const sellAllOptions = [
    {
      name: 'Pronta entrega',
      value: 'delivery'
    },
    {
      name: 'Encomenda',
      value: 'order'
    }
  ]


  const [productName, setProductName] = useState('')
  const [productType, setProductType] = useState('')
  const [productDescription, setProductDescription] = useState('')
  const [sellType, setSellType] = useState(sellAllOptions[0].value)
  const [flavors, setFlavors] = useState([])
  const [image, setImage] = useState('')

  const getProductName = (event) => setProductName(event)
  const getProductType = (event) => setProductType(event)
  const getProductDescription = (event) => setProductDescription(event)
  const getSell = (event) => setSellType(event)
  const getFlavor = (event) => setFlavors(event)
  const getImage = (event) => setImage(event)

  const productObj = () => {
    return {
      id: creteId(),
      productName,
      productType,
      productDescription,
      sellType,
      flavors,
      image,
    }
  }

  const createProduct = () => {
    if (productName !== '' && productType !== '') {

      const getLocal = JSON.parse(localStorage.getItem('products')) || []
      const findProductWithSameName = getLocal.some((current) => current.productName === productName)

      if (findProductWithSameName === false || getLocal.length === 0) {
        if (productDescription !== '') {
          if (flavors.length !== 0) {

            const flavorsCheck = flavors.map((current) => current.name !== '' && current.price !== 0)

            if (flavorsCheck[0] === false) {
              return alert('[ERRO] Verifique se o seu sabor possui o nome e o preço!')
            }

            if (image !== '') {

              const setLocal = JSON.stringify([productObj(), ...getLocal])
              localStorage.setItem('products', setLocal)

              cancel('cancelAddProduct')
              return alert('O seu produto foi criado com SUCESSO!')
            }

            return alert('[ERRO] O seu produto deve possuir uma imagem!')
          }

          return alert('[ERRO] Verifique se o seu produto possui ao menos um sabor!')
        }

        return alert('[ERRO] Verifique se o seu produto possui uma descrição!')
      }

      return alert('[ERRO] Já existe um produto com este nome!')
    }

   return  alert('[ERRO] Verifique se o seu produto possui um nome e um tipo!')
  }

  return (
    <div>
      <ContentContainer sectionTitle="Produtos" contentTitle="Novo Produto">
        {<MainButton buttonName='Cancelar' buttonValue='cancelAddProduct' functionOnClick={cancel}/>}
        {<MainButton buttonName='Salvar' buttonValue='saveProduct' functionOnClick={createProduct}/>}
      </ContentContainer>
      <div className='inputProductContainer'>
        <div className='inputNewProductContainer'>
          <TextInput
            name='Nome'
            placeholderInput='Nome do produto'
            inputFunction={getProductName}
          />
          <div className='inputTypeProductContainer'>
            <RadioInput
              label='Unidade'
              id={'productTypeUnity'}
              name={'productType'}
              value={'unity'}
              inputFunction={getProductType}
            />
            <RadioInput
              label='Quilo'
              id={'productTypeQuilo'}
              name={'productType'}
              value={'kilo'}
              inputFunction={getProductType}
            />
          </div>
          <TextAreaInput
            name='Descrição'
            placeholderInput='Descrição do produto.'
            inputFunction={getProductDescription}
          />
          <SelectInput
            name={'Venda'}
            allOptions={sellAllOptions}
            inputFunction={getSell}
          />
        </div>
        <div className='inputNewProductContainer'>
          <FlavorsTable inputFunction={getFlavor}/>
        </div>
        <div className='inputNewProductContainer'>
          <InputFile inputFunction={getImage}/>
        </div>
      </div>
    </div>
  )
}

export default NewProduct