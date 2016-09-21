import React, { Component } from 'react';

import QuoteLastTradeDateApi from './QuoteLastTradeDateApi';

class QuoteLastTradeDate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
    };

    const query = ''
    QuoteLastTradeDateApi.search(query).then((quotes) => (
        this.setState({
          quotes: quotes
        })
      ));
  }
  render() {
    return (
      <div className="row QuoteLastTradeDate">
        <h1>QuoteLastTradeDate page</h1>

        <QuoteLastTradeDatesView quotes={this.state.quotes} />
      </div>
    );
  }
}

const QuoteLastTradeDatesView = (props) => (
  <div>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>Code</th>
          <th>Symbol</th>
          <th>Last trade date</th>
        </tr>
      </thead>
      <tbody>
        {
          props.quotes.map((quote, idx) => (
            <tr>
              <th scope="row">{idx}</th>
              <td>{quote.code}</td>
              <td>{quote.symbol}</td>
              <td>{quote.lastTradeDate}</td>
            </tr>
          ))
        }
      </tbody>
    </table>

  </div>
);

export default QuoteLastTradeDate;
