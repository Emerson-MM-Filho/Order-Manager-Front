import React from 'react'
import './style.scss'

function OrdersFilter({ addClass, children }) {
  return (
    <div className={`default-container ${addClass}`}>
      { children }
    </div>
  )
}

export default OrdersFilter