import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Login from './components/login/Login';
import Products from './components/products/Products';
import CreateProducts from './components/products/CreateProducts';
import NotFound from './components/notfound/NotFound';

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/Login" exact component={Login} />
          <Route path="/" exact component={Dashboard} />
          <Route path="/Header" exact component={Header} />
          <Route path="/Sidebar" exact component={Sidebar} />
          <Route path="/Products" exact component={Products} />
          <Route path="/CreateProduct" exact component={CreateProducts} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
