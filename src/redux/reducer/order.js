import { RECIEVE_ORDER_FORM_INPUT, ADD_PRODUCTS, CREATE_ORDER} from '../actions'

const INITIAL_STATE = {
  paymentMethod: 'creditCard',
  paymentStatus: false,
  deliveryMethod: 'dispatch',
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
      const { note, clientName, clientPhone, addressStreet, addressNumber, addressDistrict, addressComplement, paymentMethod, paymentStatus, deliveryMethod, deliveryDate, deliveryTime, products } = action.inputs
      const newOrder = {
        note,
        payment: {
          method: paymentMethod,
          status: paymentStatus,
        },
        delivery: {
          date: deliveryDate,
          time: deliveryTime,
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
      const currentOrders = JSON.parse(localStorage.getItem('allOrders')) || []
      localStorage.setItem('allOrders', [...currentOrders, JSON.stringify(newOrder)])
      return INITIAL_STATE

    default:
      return state
  }
}