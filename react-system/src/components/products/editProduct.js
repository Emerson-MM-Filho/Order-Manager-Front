// import ContentContainer from "../ui/contentContainer";
// import MainButton from "../ui/mainButton";
// import TextInput from "../inputs/textInput";
// import RadioInput from "../inputs/radioInput";
// import TextAreaInput from "../inputs/textAreaInput";
// import SelectInput from "../inputs/selectInput";
// import FlavorsTable from "./flavorsTable";
// import InputFile from "./inputFile";
// import {useState} from "react";

const EditProduct = ({productToEdit}) => {

  // const sellAllOptions = [
  //   {
  //     name: 'Pronta entrega',
  //     value: 'delivery'
  //   },
  //   {
  //     name: 'Encomenda',
  //     value: 'order'
  //   }
  // ]
  //
  //
  // const [productName, setProductName] = useState('')
  // const [productType, setProductType] = useState('')
  // const [productDescription, setProductDescription] = useState('')
  // const [sellType, setSellType] = useState(sellAllOptions[0].value)
  // const [flavors, setFlavors] = useState([])
  // const [image, setImage] = useState('')

  return (
    <div>
      {productToEdit.id}
      {/*<ContentContainer sectionTitle="Produtos" contentTitle="Editar Produto">*/}
      {/*  {<MainButton*/}
      {/*    buttonName='Cancelar'*/}
      {/*    buttonValue='cancelAddProduct'*/}
      {/*    // functionOnClick={cancel}*/}
      {/*  />}*/}
      {/*  {<MainButton*/}
      {/*    buttonName='Salvar'*/}
      {/*    buttonValue='saveProduct'*/}
      {/*    // functionOnClick={createProduct}*/}
      {/*  />}*/}
      {/*</ContentContainer>*/}
      {/*<div className='inputProductContainer'>*/}
      {/*  <div className='inputNewProductContainer'>*/}
      {/*    <TextInput*/}
      {/*      name='Nome'*/}
      {/*      placeholderInput='Nome do produto'*/}
      {/*      // inputFunction={getProductName}*/}
      {/*    />*/}
      {/*    <div className='inputTypeProductContainer'>*/}
      {/*      <RadioInput*/}
      {/*        label='Unidade'*/}
      {/*        id={'productTypeUnity'}*/}
      {/*        name={'productType'}*/}
      {/*        value={'unity'}*/}
      {/*        // inputFunction={getProductType}*/}
      {/*      />*/}
      {/*      <RadioInput*/}
      {/*        label='Quilo'*/}
      {/*        id={'productTypeQuilo'}*/}
      {/*        name={'productType'}*/}
      {/*        value={'kilo'}*/}
      {/*        // inputFunction={getProductType}*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*    <TextAreaInput*/}
      {/*      name='Descrição'*/}
      {/*      placeholderInput='Descrição do produto.'*/}
      {/*      // inputFunction={getProductDescription}*/}
      {/*    />*/}
      {/*    <SelectInput*/}
      {/*      name={'Venda'}*/}
      {/*      allOptions={sellAllOptions}*/}
      {/*      // inputFunction={getSell}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <div className='inputNewProductContainer'>*/}
      {/*    <FlavorsTable*/}
      {/*      // inputFunction={getFlavor}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <div className='inputNewProductContainer'>*/}
      {/*    <InputFile*/}
      {/*      // inputFunction={getImage}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  )
}

export default EditProduct