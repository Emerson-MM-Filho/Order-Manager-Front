import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.scss'

import AllOrders from './pages/AllOrders/'
import NewAndEditOrder from './pages/NewAndEditOrder'
import AllProducts from './pages/AllProducts'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={ AllOrders } />
      <Route exact path='/new-order' component={ NewAndEditOrder } />
      <Route exact path='/order-edit/:id' component={ NewAndEditOrder } />
      <Route exact path='/products' component={ AllProducts } />
    </Switch>
  )
}

export default App;
