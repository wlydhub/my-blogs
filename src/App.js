import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header/index.js';
import Home from './pages/home/index.js';
import Detail from './pages/detail/index.js';
import Login from './pages/login/index.js';
import Write from './pages/write/index.js';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <BrowserRouter>
          <div>
            <Header />
            <Route path = '/' exact component = { Home }></Route>
            <Route path = '/detail/:id' exact component = { Detail }></Route>
            <Route path = '/login' exact component = { Login }></Route>
            <Route path = '/write' exact component = { Write }></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
