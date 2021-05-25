import './orderDetails.css'
import {BsPlusSquareFill} from "react-icons/bs";

function orderDetails() {
  return (
    <div className="orderDetails">
      <h4>Produtos</h4>
      <div id="tableHeader">
        <div className="withBorder" id="orderProductName">
          <p>Nome</p>
        </div>
        <div className="withBorder" id="orderProductFlavor">
          <p>Sabor</p>
        </div>
        <div className="withBorder" id="orderProductQuantity">
          <p>Quantidade</p>
        </div>
        <div className="withBorder" id="orderProductPrice">
          <p>Valor</p>
        </div>
        <div id="orderProductTotal">
          <p>Total</p>
        </div>
      </div>
      <BsPlusSquareFill id="orderAddProductButton"/>
    </div>
  )
}

export default orderDetails