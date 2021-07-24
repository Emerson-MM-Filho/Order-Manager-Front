import {useState} from "react";
import AllProducts from "./allProducts";
import NewProduct from "./newProduct";
import EditProduct from "./editProduct";

const Products = () => {

  const [sectionToShow, setSectionToShow] = useState('allProducts')
  const [productToEdit, setProductToEdit] = useState('')

  const allProducts = JSON.parse(localStorage.getItem('products')) || []

  const getButtonClickedValue = (newOrAll) => setSectionToShow(newOrAll)

  const idProductToEdit = id => {
    setProductToEdit(allProducts.find((current) => current.id === id))
  }

  return (
    <div>
      {(sectionToShow === 'allProducts' || sectionToShow === 'cancelAddProduct') && <AllProducts clicked={getButtonClickedValue} allProducts={allProducts} productToEdit={idProductToEdit}/>}
      {(sectionToShow === 'addProduct') && <NewProduct clicked={getButtonClickedValue}/>}
      {(sectionToShow === 'editProduct') && <EditProduct productToEdit={productToEdit}/>}
    </div>
  )
}

export default Products