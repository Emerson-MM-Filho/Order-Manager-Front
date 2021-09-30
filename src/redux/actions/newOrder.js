import { RECIEVE_ORDER_FORM_INPUT } from './index'

export const recieveOrderFormInputAction = (name, value) => ({
  type: RECIEVE_ORDER_FORM_INPUT,
  name,
  value
})