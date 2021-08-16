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
          <p>
            Data:
            <span>
              {delivery.date}
            </span>
          </p>
          <p>
            Hora:
            <span>
              {delivery.time}
            </span>
          </p>
        </div>
        <p>
          Entrega:
          <span>
            <DeliveryType type={delivery.method} addClass='icon-color'/>
          </span>
        </p>
        <div className='inline-info'>
          <p>
            Pagamento:
            <span>
              <PaymentMethod type={payment.method} addClass='icon-color'/>
            </span>
          </p>
          <p>
            Status:
            <span>
              <PaymentStatus status={payment.status}/>
            </span>
          </p>
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