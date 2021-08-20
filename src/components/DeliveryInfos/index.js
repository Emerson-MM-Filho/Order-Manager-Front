import React from 'react'
import './style.scss'

import PaymentMethod from '../PaymentMethod'
import DeliveryType from '../DeliveryType'
import PaymentStatus from '../PaymentStatus'

function DeliveryInfos({order}) {
  const { client, payment, delivery, note } = order
  return(
    <div className='delivery-info'>
      <h3>Informações de Entrega</h3>
      <div className='infos'>
        <p>
          Nome:
          <span>
            {client.name}
          </span>
        </p>
        <p>
          Telefone:
          <span>
            {client.phone}
          </span>
        </p>
        <p>
          Endereço:
          <span>
            {`${client.address.street}, ${client.address.number} / ${client.address.district}`}
          </span>
        </p>
        <p>
          Complemento:
          <span>
            {client.address.complement}
          </span>
        </p>
        <div className='inline-info'>
          <p className='inline-content'>
            Data:
            <span>
              {delivery.date}
            </span>
          </p>
          <p className='inline-content'>
            Hora:
            <span>
              {delivery.time}
            </span>
          </p>
        </div>
        <div>
          Entrega:
          <span>
            <DeliveryType type={delivery.method} addClass='icon-color'/>
          </span>
        </div>
        <div className='inline-info'>
          <div className='inline-content'>
            Pagamento:
            <span>
              <PaymentMethod type={payment.method} addClass='icon-color'/>
            </span>
          </div>
          <div className='inline-content'>
            Status:
            <span>
              <PaymentStatus status={payment.status}/>
            </span>
          </div>
        </div>
        <p>
          Nota:
          <span>
            {note}
          </span>
        </p>
      </div>
    </div>
  )
}

export default DeliveryInfos