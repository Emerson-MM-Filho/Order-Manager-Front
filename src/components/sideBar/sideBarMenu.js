import './sideBarMenu.css'
import Logo from '../../images/logo.jpeg'
import Button from './sideBarButton'


//import icons
import { IoBagAdd } from "react-icons/io5"
import { IoMdNotifications } from "react-icons/io"
import { FaClipboardList } from "react-icons/fa"
import { MdPeople } from "react-icons/md"
import { BsFillFolderFill, BsFillGearFill } from "react-icons/bs"

const iconSize = '1.2rem'

function sideBarMenu({selected}) {
  const selectedSection = element => selected(element)

  const mainButtons = [
    {
      id: 'newOrder',
      icon: <IoBagAdd size={iconSize}/>,
      buttonName: 'Novo Pedido',
      value: 'newOrder',
    },
    {
      id: 'allOrders',
      icon: <FaClipboardList size={iconSize}/>,
      buttonName: 'Todos os Pedidos',
      value: 'allOrder',
    },
    {
      id: 'clients',
      icon: <MdPeople size={iconSize}/>,
      buttonName: 'Clientes',
      value: 'clients',
    },
    {
      id: 'products',
      icon: <BsFillFolderFill size={iconSize}/>,
      buttonName: 'Produtos',
      value: 'products',
    },
  ]

  const settingsButtons = [
    {
      id: 'configs',
      icon: <BsFillGearFill size={iconSize}/>,
      buttonName: 'Configurações',
      value: 'configs',
    },
    {
      id: 'alerts',
      icon: <IoMdNotifications size={iconSize}/>,
      buttonName: 'Alertas',
      value: 'alerts',
    },
  ]

  return (
    <div id="sideBarContainer">
      <div id="logoArea">
        <img src={Logo} alt="logo"/>
        <h1>Beatriz Dias Confeitaria</h1>
      </div>
      <div id="mainMenu">
        {mainButtons.map((element) =>
          <Button
            id={element.id}
            icon={element.icon}
            buttonName={element.buttonName}
            value={element.value}
            key={element.id}
            onClickButton={selectedSection}
          />
        )}
      </div>
      <div id="configs">
        <h2>Ajustes</h2>
        {settingsButtons.map(element =>
          <Button
            id={element.id}
            icon={element.icon}
            buttonName={element.buttonName}
            value={element.value}
            key={element.id}
            onClickButton={selectedSection}
          />
        )}
      </div>
    </div>
  )
}

export default sideBarMenu