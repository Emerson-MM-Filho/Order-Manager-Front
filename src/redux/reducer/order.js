import { v4 as uuidv4 } from 'uuid'
import { RECIEVE_ORDER_FORM_INPUT, ADD_PRODUCTS, CREATE_ORDER, ORDER_TO_EDIT} from '../actions'

import { currentDate, currentTime } from '../../helpers/currentDateTime'
import { newOrderFormValidation } from '../../helpers/newOrderFormValidation'

const INITIAL_STATE = {
  paymentMethod: 'creditCard',
  paymentStatus: false,
  deliveryMethod: 'dispatch',
  haveDeliveryTime: false,
  deliveryDate: currentDate,
  deliveryTime: currentTime,
  isAnEdition: false,
}


export const order = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECIEVE_ORDER_FORM_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      }

    case ADD_PRODUCTS:
      return {
        ...state,
        products: action.products,
      }

    case CREATE_ORDER:
      const { note, clientName, clientPhone, addressStreet, addressNumber, addressDistrict, addressComplement, paymentMethod, paymentStatus, deliveryMethod, haveDeliveryTime, deliveryDate, deliveryTime, products } = action.inputs
      const newOrder = {
        id: uuidv4(),
        note,
        createdAt: `${currentDate} ${currentTime}`,
        payment: {
          method: paymentMethod,
          status: paymentStatus,
        },
        delivery: {
          haveDeliveryTime,
          method: deliveryMethod,
        },
        client: {
          name: clientName,
          phone: clientPhone,
          address: {
            street: addressStreet,
            number: addressNumber,
            district: addressDistrict,
            complement: addressComplement,
          },
        },
        products,
      }

      if (haveDeliveryTime) newOrder.delivery = {
        ...newOrder.delivery,
        date: deliveryDate,
        time: deliveryTime,
      }

      let errorMsg

      try {
        newOrderFormValidation(newOrder)
      } catch (error) {
        errorMsg = error.message
      } 
      if (errorMsg) {
        alert(errorMsg)
        return {...state}
      }

      const currentOrders = JSON.parse(localStorage.getItem('allOrders')) || []
      localStorage.setItem('allOrders', JSON.stringify([...currentOrders, newOrder]))
      action.history.push('/')
      return INITIAL_STATE

    
    case ORDER_TO_EDIT:
      const order = JSON.parse(localStorage.getItem('allOrders')).filter(order => order.id === action.orderId)
      return {
        orderToEdit: order[0],
      }

    default:
      return state
  }
}