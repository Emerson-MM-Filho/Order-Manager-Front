import './selectInput.css'
import React from "react";

function selectInput({name, allOptions}) {
  return (
    <label htmlFor={name} className="inputText">
      {name}
      <select id={name}>
        {
          allOptions.map((element) => <option>{element}</option>)
        }
      </select>
    </label>
  )
}

export default selectInput