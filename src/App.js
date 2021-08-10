import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.scss'

import AllOrders from './pages/AllOrders'
import NewProduct from './pages/NewOrder'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={ AllOrders } />
      <Route exact path='/new-product' component={ NewProduct } />
    </Switch>
  )
}

export default App;
