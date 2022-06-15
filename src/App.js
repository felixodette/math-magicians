import './App.css';
import React, { Component } from 'react';
import Calculator from './components/Calculator';
import { Routes, Route, } from 'react-router-dom';
import NavBar from './components/Nav';
import Home from './components/Home';
import Quote from './components/Quote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Quote" element={<Quote />} />
            <Route path="/Calculator" element={<Calculator />} />
          </Routes>
        </main>
      </>
    );
  }
}

export default App;
