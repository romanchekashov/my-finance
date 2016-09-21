import React, { Component } from 'react';

import logo from './logo.svg';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="row">
        <div className="Login-header">
          <img src={logo} className="Login-logo" alt="logo" />
          <h2>Welcome to MyFinance</h2>
        </div>
        <form>
          <div className="form-group">
            <label className="sr-only" htmlFor="exampleInputEmail3">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="exampleInputPassword3">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword3" placeholder="Password" />
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" /> Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
      </div>
    );
  }
}

export default Login;
