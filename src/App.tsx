import React from 'react'
import './App.css'

import Beer from './Components/Beer/Beer'
import Food from './Components/Foods/Foods'

const App = () => {
  return (
    <div className="App">
      <Food />
      <Beer />
    </div>
  )
}

export default App
