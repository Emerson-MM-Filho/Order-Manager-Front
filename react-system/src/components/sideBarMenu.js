import './sideBarMenu.css'
import logo from '../images/logo.jpeg'
import Button from './sideBarButton'


//import icons
import { IoBagAdd } from "react-icons/io5"
import { IoMdNotifications } from "react-icons/io"
import { FaClipboardList } from "react-icons/fa"
import { MdPeople } from "react-icons/md"
import { BsFillFolderFill, BsFillGearFill } from "react-icons/bs"

const iconSize = '1.2rem'

function sideBarMenu() {
  return (
    <div id="sideBarContainer">
      <div id="logoArea">
        <img src={logo} alt="logo"/>
        <h1>Beatriz Dias Confeitaria</h1>
      </div>
      <div id="mainMenu">
        <Button icon={<IoBagAdd size={iconSize}/>} buttonName='Novo Pedido'/>
        <Button icon={<FaClipboardList size={iconSize}/>} buttonName='Todos os Pedidos'/>
        <Button icon={<MdPeople size={iconSize}/>} buttonName='Novo Pedido'/>
        <Button icon={<BsFillFolderFill size={iconSize}/>} buttonName='Novo Pedido'/>
      </div>
      <div id="configs">
        <h2>Ajustes</h2>
        <Button icon={<BsFillGearFill size={iconSize}/>} buttonName='Configurações'/>
        <Button icon={<IoMdNotifications size={iconSize}/>} buttonName='Notificações'/>
      </div>
    </div>
  )
}

export default sideBarMenu