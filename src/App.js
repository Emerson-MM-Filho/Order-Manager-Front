import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.scss'

import AllOrders from './pages/AllOrders/AllOrders.js'
import NewOrder from './pages/NewOrder/NewOrder'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={ AllOrders } />
      <Route exact path='/new-order' component={ NewOrder } />
    </Switch>
  )
}

export default App;
