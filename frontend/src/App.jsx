import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar, Footer, Hero, Features, About } from './components/index.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div id="home">
        <Navbar/>
      </div>
      <div>
        <Hero/>
      </div>
      <div>
        <Features/>
        <About/>
      </div>
    </div>
  )
}

export default App
