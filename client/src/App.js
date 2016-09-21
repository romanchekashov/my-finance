import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import QuoteLastTradeDate from './QuoteLastTradeDate';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
    };

    const query = ''
    QuoteLastTradeDate.search(query).then((quotes) => (
        this.setState({
          quotes: quotes
        })
      ));
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Roman =)</h2>
        </div>
        <div className="App-navigation">
            <Navigation />
        </div>
        <div className="App-main">
            {this.props.children}
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <QuoteLastTradeDatesView quotes={this.state.quotes} />
        </p>
      </div>
    );
  }
}

const QuoteLastTradeDatesView = (props) => (
  <div>
    {
      props.quotes.map((quote, idx) => (
        <ul>
          <li>{quote.code}</li>
          <li>{quote.symbol}</li>
          <li>{quote.lastTradeDate}</li>
        </ul>
      ))
    }
  </div>
);

export default App;
