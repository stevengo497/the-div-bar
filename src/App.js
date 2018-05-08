import React, { Component } from 'react';
import MyRoutes from './config/routes';
import Header from './components/Header';
//import Home from './components/Home';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          { MyRoutes }
      </div>
    );
  }
}

export default App;
