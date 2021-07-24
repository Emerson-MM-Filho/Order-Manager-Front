import './sideBarButton.css'

function sideBarButton({id, icon, buttonName, value, onClickButton}) {
  const renderSection = clicked => {
    onClickButton(clicked.currentTarget.value)
  }

  return (
    <button id={id} className="sideBarButton" value={value} onClick={renderSection}>
      {icon}
      {buttonName}
    </button>
  )
}

export default sideBarButton