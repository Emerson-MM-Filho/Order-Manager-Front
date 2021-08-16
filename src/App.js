import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.scss'

import Provider from './context/allOrders/allOrdersProvider'
import AllOrders from './pages/AllOrders/AllOrders.js'
import NewOrder from './pages/NewOrder/NewOrder'

function App() {
  return (
    <Switch>
      <Provider>
        <Route exact path='/' component={ AllOrders } />
        <Route exact path='/new-order' component={ NewOrder } />
      </Provider>
    </Switch>
  )
}

export default App;
