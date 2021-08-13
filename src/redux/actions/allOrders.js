import { SHOW_ORDER_DETAIL_MODAL } from './index'

export const showOrderDetailModalAction = (param) => ({
  type: SHOW_ORDER_DETAIL_MODAL,
  showModal: param,
})