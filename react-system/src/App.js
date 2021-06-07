import './App.css'
import SideBarMenu from './components/sideBar/sideBarMenu'
import NewOrder from './components/newOrder/newOrder'
import { useState } from "react"

function App() {
  const [sectionToShow, setSectionToShow] = useState('newOrder')
  const renderSection = selectedSection => setSectionToShow(selectedSection)

  return (
    <main>
      <aside id="sideBarMenu">
        <SideBarMenu selected={renderSection}/>
      </aside>
      {sectionToShow === 'newOrder' && <NewOrder/>}
    </main>
  )
}

export default App;
