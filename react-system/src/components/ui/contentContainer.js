import './contentContainer.css'
import SectionTitle from "../sectionTitle";


const ContentContainer = (props) => {
  return (
    <div>
      <SectionTitle title={props.sectionTitle}/>
      <div>
        <div className="headerContainer">
          <h4>{props.contentTitle}</h4>
          <div className="buttonsContainer">
            {props.children}
          </div>
        </div>
      </div>

    </div>
  )
}

export default ContentContainer