import './App.css'
import SideBarMenu from './components/sideBar/sideBarMenu'
import NewOrder from './components/newOrder/newOrder'
import Products from "./components/products/products";
import Configs from "./components/configs/configs";
import Clients from "./components/clients/clients";
import AllOrders from "./components/allOrders/allOrders";
import Alerts from "./components/alerts/alerts";

import { useState } from "react"

function App() {
  const [sectionToShow, setSectionToShow] = useState('newOrder')
  const renderSection = selectedSection => setSectionToShow(selectedSection)

  return (
    <main>
      <aside id="sideBarMenu">
        <SideBarMenu selected={renderSection}/>
      </aside>
      <section className="contentSection">
        <div className="contentContainer">
          {sectionToShow === 'newOrder' && <NewOrder/>}
          {sectionToShow === 'allOrder' && <AllOrders/>}
          {sectionToShow === 'clients' && <Clients/>}
          {sectionToShow === 'products' && <Products/>}
          {sectionToShow === 'configs' && <Configs/>}
          {sectionToShow === 'alerts' && <Alerts/>}
        </div>
      </section>
    </main>
  )
}

export default App;
