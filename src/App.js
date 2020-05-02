import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Product from './sections/product/Product';
import ShoppingCart from './sections/shopping-cart/ShoppingCart';
import Menu from './sections/menu/Menu';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter basename="delivery-pizza">
      <Container>
        <Menu />
        <br />
        <Switch>
          <Route exact path="/">
            <Redirect to="/menu" component={Product} />
          </Route>
          <Route exact path="/shopping-cart" component={ShoppingCart} />
          <Route exact path="/menu" component={Product} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
