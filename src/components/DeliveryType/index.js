import React from 'react'
import './style.scss'

import { truckIcon, storeIcon } from '../../icons';

function DeliveryType({type}) {
  return (
    <div className='delivery-type'>
      {type === 'Delivery' ? truckIcon : storeIcon}
      {type}
    </div>
  )
}

export default DeliveryType