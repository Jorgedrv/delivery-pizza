import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Product from './sections/product/Product';
import ShoppingCart from './sections/shopping-cart/ShoppingCart';

function App() {
  return (
    <BrowserRouter basename="delivery">
      <div>
          <Switch>
            <Route exact path="/" component={Product} />
            <Route exact path="/shopping-cart" component={ShoppingCart} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
