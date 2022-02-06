import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World</p>
        <button type="button" className="button mt-5" >
          clickme
        </button>
      </header>
    </div>
  )
}

export default App
