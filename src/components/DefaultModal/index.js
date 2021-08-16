import React from 'react'
import './style.scss'

function DefaultModal({children, closeModal}) {
  return(
    <div className='modal-cover-container' onClick={closeModal}>
      <div className='modal-content-container'>
        { children }
      </div>
    </div>
  )
}

export default DefaultModal