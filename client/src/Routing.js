import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import Orders from './Orders';

class Routing extends Component {
  render () {
    return (
      <BrowserRouter>
        <Route path='/orders' component={Orders} />
        <Route path='/' component={App} exact />
      </BrowserRouter>
    );
  }
}

export default Routing;
