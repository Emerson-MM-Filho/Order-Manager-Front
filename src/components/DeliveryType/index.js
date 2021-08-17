import React from 'react'
import './style.scss'

import { truckIcon, storeIcon } from '../../icons';

function DeliveryType({type, addClass}) {
  return (
    <div className={`delivery-type ${addClass}`}>
      {type === 'dispatch' ? truckIcon : storeIcon}
      {type  === 'dispatch' ? 'Entrega' : 'Retirada no Local'}
    </div>
  )
}

export default DeliveryType