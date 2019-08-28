import React from 'react';
import Layout from "./containers/layout/layout"
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from "./containers/home/home"
import Cart from "./containers/cart/cart"
import Checkout from "./containers/checkout/checkout"

function App() {

  let routes = (
    <Switch>
      <Route path="/cart" component={ Cart } />
      <Route path="/checkout" component={ Checkout } />
      <Route path="/" exact component={ Home } />
      <Redirect to='/' />
    </Switch>);
    
  return (
    <div>
      <Layout>
        { routes }
      </Layout>
    </div>
  );
}

export default App;
