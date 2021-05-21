import './sideBarButton.css'

function sideBarButton({icon, buttonName}) {
  return (
    <button className="sideBarButton">
      {icon}
      <p>{buttonName}</p>
    </button>
  )
}

export default sideBarButton