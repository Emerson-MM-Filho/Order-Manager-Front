import './sideBarMenu.css'
import logo from '../images/logo.jpeg'
import Button from './sideBarButton'


//import icons
import { IoBagAdd } from "react-icons/io5"
import { FaClipboardList } from "react-icons/fa"
import { MdPeople } from "react-icons/md"
import { BsFillFolderFill } from "react-icons/bs"

function sideBarMenu() {
  return (
    <div id="sideBarMenu">
      <div id="logoArea">
        <img src={logo} alt="logo"/>
        <h1>Beatriz Dias Confeitaria</h1>
      </div>
      <div id="mainMenu">
        <Button icon={<IoBagAdd size={"1.6rem"}/>} buttonName='Novo Pedido'/>
        <Button icon={<FaClipboardList size={"1.6rem"}/>} buttonName='Todos os Pedidos'/>
        <Button icon={<MdPeople size={"1.6rem"}/>} buttonName='Novo Pedido'/>
        <Button icon={<BsFillFolderFill size={"1.6rem"}/>} buttonName='Novo Pedido'/>
      </div>
      <div> </div>
    </div>
  )
}

export default sideBarMenu