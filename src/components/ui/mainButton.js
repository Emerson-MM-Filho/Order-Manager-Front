import './mainButton.css'

function mainButton({buttonName, buttonValue, functionOnClick}) {

  const buttonClicked = (element) => {
    functionOnClick(element.currentTarget.value)
  }

  return (
    <button className="newOrderButton" value={buttonValue} onClick={buttonClicked}>{buttonName}</button>
  )
}

export default mainButton