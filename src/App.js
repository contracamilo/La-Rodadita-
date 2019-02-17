import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import styles from './styles/main.scss';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;