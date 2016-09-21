import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <ul role="navigation">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/quoteLastTradeDate">QuoteLastTradeDate</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
