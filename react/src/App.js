import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './Users'

function App() {
  return (
    <div>
      <img src={logo} className="logo" alt="logo" />
      <h1>React sample with WarpJS</h1>
      <Users />
    </div>
  );
}

export default App;
