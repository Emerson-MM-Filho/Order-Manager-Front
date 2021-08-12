import React from 'react'
import './style.scss'

import { truckIcon, storeIcon } from '../../icons';

function DeliveryType({type, addClass}) {
  return (
    <div className={`delivery-type ${addClass}`}>
      {type === 'Delivery' ? truckIcon : storeIcon}
      {type}
    </div>
  )
}

export default DeliveryType