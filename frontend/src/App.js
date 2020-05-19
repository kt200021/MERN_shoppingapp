import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import UsersList from './components/users-list.component'
import CreateUser from './components/create-user.component'
import Login from './components/login.component'
import Vendor from './components/vendor.component'
import Customer from './components/customer.component'
import CreateProduct from './components/create-product.component'
import ProductsList from './components/products-list.component'
import ProductsListbyname from './components/filterproductbyname.component'
import ProductsListbyuser from './components/filterproductbyuser.component'
import OrdersList from './components/order-list.component'
import CreateOrder from './components/create-order.component'
import ProductsListready from './components/readyproducts-list.component'
import ProductsListdispatch from './components/dispatchproducts-list.component'
import ProductsListcancel from './components/cancelproducts.component'
import rating from './components/rating.component'
function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">App</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Users</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create User</Link>
              </li>
              <li className="navbar-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
            </ul>
          </div>
        </nav>

        <br/>
        <Route path="/" exact component={UsersList}/>
        <Route path="/create" exact component={CreateUser}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/login/vendor" exact component={Vendor}/>

        <Route path="/login/customer" exact component={Customer}/>
        <Route path="/login/vendor/create" exact component={CreateProduct}/>
        <Route path="/login/vendor/products" exact component={ProductsList}/>
        <Route path="/login/customer/ProductsListbyname" exact component={ProductsListbyname}/>
        <Route path="/login/customer/orders-list" exact component={OrdersList}/>
        <Route path="/login/customer/createorder" exact component={CreateOrder}/>
        <Route path="/login/vendor/readyproducts" exact component={ProductsListready}/>
        <Route path="/login/vendor/dispatchproducts" exact component={ProductsListdispatch}/>
        <Route path="/login/vendor/cancelproducts" exact component={ProductsListcancel}/>
        <Route path="/login/customer/rating" exact component={rating}/>
      </div>
    </Router>
  );
}

export default App;
