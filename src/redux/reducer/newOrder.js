import { RECIEVE_ORDER_FORM_INPUT } from '../actions'

const INITIAL_STATE = {
  paymentMethod: 'creditCard',
  paymentStatus: false,
  deliveryMethod: 'dispatch',
}


export const newOrder = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECIEVE_ORDER_FORM_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      }

    default:
      return state
  }
}