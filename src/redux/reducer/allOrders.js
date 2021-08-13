import { SHOW_ORDER_DETAIL_MODAL } from '../actions'

const INITIAL_STATE = {
  showOrderDetailModal: false,
}

export const allOrders = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_ORDER_DETAIL_MODAL:
      return {
        ...state,
        showOrderDetailModal: action.showModal,
      }

    default:
      return state
  }
}