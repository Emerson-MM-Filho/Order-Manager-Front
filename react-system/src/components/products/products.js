import {useState} from "react";
import AllProducts from "./allProducts";
import NewProduct from "./newProduct";

const Products = () => {

  const [sectionToShow, setSectionToShow] = useState('allProducts')
  const [allProducts, setAllProducts] = useState([])

  const getButtonClickedValue = (newOrAll) => setSectionToShow(newOrAll)

  const newProduct = (event) => {
    setAllProducts([event, ...allProducts])
  }

  return (
    <div>
      {(sectionToShow === 'allProducts' || sectionToShow === 'cancelAddProduct') && <AllProducts clicked={getButtonClickedValue} allProducts={allProducts}/>}
      {(sectionToShow === 'addProduct') && <NewProduct clicked={getButtonClickedValue} newProduct={newProduct}/>}
    </div>
  )
}

export default Products