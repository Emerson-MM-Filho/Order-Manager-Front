import {useState} from "react";
import AllProducts from "./allProducts";
import NewProduct from "./newProduct";

const Products = () => {

  const [sectionToShow, setSectionToShow] = useState('allProducts')

  const allProducts = JSON.parse(localStorage.getItem('products')) || []

  const getButtonClickedValue = (newOrAll) => setSectionToShow(newOrAll)

  return (
    <div>
      {(sectionToShow === 'allProducts' || sectionToShow === 'cancelAddProduct') && <AllProducts clicked={getButtonClickedValue} allProducts={allProducts}/>}
      {(sectionToShow === 'addProduct') && <NewProduct clicked={getButtonClickedValue}/>}
    </div>
  )
}

export default Products