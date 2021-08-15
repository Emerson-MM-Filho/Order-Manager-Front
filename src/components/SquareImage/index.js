import React from 'react'
import './style.scss'

function SquareImage({image, altText}) {

  return(
    <img src={image} alt={altText} className='square-image'/>
  )
}

export default SquareImage