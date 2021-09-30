import { combineReducers } from "redux";
import { allOrders } from './allOrders'
import { newOrder } from './newOrder'

export const reducer = combineReducers({
  allOrders,
  newOrder,
})