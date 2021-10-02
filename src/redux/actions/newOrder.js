import { RECIEVE_ORDER_FORM_INPUT, CREATE_ORDER, ADD_PRODUCTS, ORDER_TO_EDIT } from './index'

export const recieveOrderFormInputAction = (name, value) => ({
  type: RECIEVE_ORDER_FORM_INPUT,
  name,
  value
})

export const addProductsAction = (products) => ({
  type: ADD_PRODUCTS,
  products,
})

export const createOrderAction = (inputs, history) => ({
  type: CREATE_ORDER,
  inputs,
  history,
})

export const orderToEditAction = (orderId) => ({
  type: ORDER_TO_EDIT,
  orderId,
})