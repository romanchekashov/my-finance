import React, { Component } from 'react';

import './App.css';

import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 col-md-2 sidebar">
              <Navigation />
            </div>
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                {this.props.children}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
