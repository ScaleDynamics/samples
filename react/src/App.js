import React from 'react'
import logo from './logo.png'
import './App.css'
import Users from './Users'

function App() {
  return (
    <div>
      <header>
        <img class="logo" src={logo} alt="ScaleDynamics" />
      </header>
      <h1>React sample</h1>
      <Users />
    </div>
  )
}

export default App
