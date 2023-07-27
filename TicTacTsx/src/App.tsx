import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TicTsx from './Components/TicTsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TicTsx/>
    </div>
  )
}

export default App
