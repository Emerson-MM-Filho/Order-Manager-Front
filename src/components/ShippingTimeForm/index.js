import React, { useCallback, useContext, useState } from 'react'

import LabelWithInput from '../LabelWithInput'

import newOrderContext from '../../context/newOrder/newOrderContext'

function ShippingTimeForm({order, handleChange}) {
  const {currentDate, currentTime} = useContext(newOrderContext)

  const [shippingDate, setShippingDate] = useState(order ? order.delivery.date : currentDate)
  const [shippingHour, setShippingHour] = useState(order ? order.delivery.time : currentTime)
  const [haveDeliveryTime, setHaveDeliveryTime] = useState(order ? order.delivery.haveDeliveryTime : false)

  const handleDeliveryTime = useCallback(({ target: { name } }) => {
    setHaveDeliveryTime(!haveDeliveryTime)
    handleChange({target: {name, value: !haveDeliveryTime}})
  }, [handleChange, haveDeliveryTime])

  return (
    <>
      <LabelWithInput
        type='checkbox'
        label='Este pedido é uma encomenda?'
        addClass='inline-label'
        name='haveDeliveryTime'
        inputValue={haveDeliveryTime}
        checked={haveDeliveryTime}
        handleChange={(event) => handleDeliveryTime(event)}
      />
      {haveDeliveryTime && (
        <div className='inline-input'>
          <LabelWithInput
            type='date'
            label='Data de Entrega'
            text='Data de Entrega'
            addClass='inline'
            name='deliveryDate'
            min={currentDate}
            inputValue={order ? order.delivery.date : shippingDate}
            handleChange={(event) => {
              handleChange(event)
              setShippingDate(event.target.value)
            }}
          />
          <LabelWithInput
            type='time'
            label='Hora de Entrega'
            text='Hora de Entrega'
            addClass='inline'
            name='deliveryTime'
            inputValue={order ? order.delivery.time : shippingHour}
            handleChange={(event) => {
              handleChange(event)
              setShippingHour(event.target.value)
            }}
          />
        </div>
      )}
    </>
  )
}

export default ShippingTimeForm