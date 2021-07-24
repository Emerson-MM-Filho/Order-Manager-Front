import './mainSection.css'

const MainSection = (props) => {
  return (
    <section className="contentSection">
      <div className="contentContainer">
        {props.children}
      </div>
    </section>
  )
}

export default MainSection