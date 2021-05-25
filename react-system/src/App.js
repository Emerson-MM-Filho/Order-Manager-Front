import './App.css'
import SideBarMenu from './components/sideBarMenu'
import SectionTitle from './components/sectionTitle'
import NewOrder from './components/newOrder'

function App() {
  return (
    <main>
      <aside id="sideBarMenu">
        <SideBarMenu />
      </aside>
      <section id="contentSection">
        <div id="contentContainer">
          <SectionTitle title='Novo Pedido'/>
          <NewOrder/>
        </div>
      </section>
    </main>
  )
}

export default App;
