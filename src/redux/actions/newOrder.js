import { RECIEVE_ORDER_FORM_INPUT, CREATE_ORDER, ADD_PRODUCTS } from './index'

export const recieveOrderFormInputAction = (name, value) => ({
  type: RECIEVE_ORDER_FORM_INPUT,
  name,
  value
})

export const addProductsAction = (products) => ({
  type: ADD_PRODUCTS,
  products,
})

export const createOrderAction = (inputs) => ({
  type: CREATE_ORDER,
  inputs,
})
