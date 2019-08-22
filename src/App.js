import React from 'react';
import logo from './logo.svg';

import Layout from "./containers/layout/layout"
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Home from "./containers/home/home"
import Cart from "./containers/cart/cart"

function App() {

  let routes = (
    <Switch>
      <Route path="/cart" component={ Cart } />
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
