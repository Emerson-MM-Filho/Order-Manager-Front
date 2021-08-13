import React from 'react'
import './style.scss'

function DefaultModal({children}) {
  return(
    <div className='modal-cover-container'>
      <div className='modal-content-container'>
        { children }
      </div>
    </div>
  )
}

export default DefaultModal