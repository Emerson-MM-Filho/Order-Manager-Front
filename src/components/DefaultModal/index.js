import React from 'react'
import './style.scss'

function DefaultModal({children, addClass, ...rest}) {
  return(
    <div className='modal-cover-container'>
      <div className={`modal-content-container ${addClass}`} {...rest}>
        { children }
      </div>
    </div>
  )
}

export default DefaultModal