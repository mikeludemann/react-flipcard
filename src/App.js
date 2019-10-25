import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Flipcard, DimensionFlipcard } from './components/flipcard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="content">
        <Flipcard 
          eventAction="click"
          frontside="Hi"
          backside="I'm here"
          rotation="vertical"
          frontcolor="#fff"
          backcolor="#fff"
          frontbgcolor="#f00"
          backbgcolor="#0f0"
          width="200"
          height="200"
        ></Flipcard>
        <DimensionFlipcard 
          dimension="diagonal--right"
          frontside={<div>Hello</div>}
          backside={<div>I'm here</div>}
          frontcolor="#fff"
          backcolor="#fff"
          frontbgcolor="#f00"
          backbgcolor="#0f0"
        ></DimensionFlipcard>
      </section>
      <footer className="App-footer">
        (c) Copyright - Mike Ludemann
      </footer>
    </div>
  );
}

export default App;
