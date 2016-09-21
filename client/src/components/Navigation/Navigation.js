import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
  render() {
    return (
      <ul className="nav nav-sidebar" role="navigation">
        <li className="active"><Link to="/login">Login</Link></li>
        <li><Link to="/quoteLastTradeDate">QuoteLastTradeDate</Link></li>
      </ul>
    );
  }
}

export default Navigation;
