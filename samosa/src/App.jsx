import { useState } from 'react'
import './App.css'
import Samosa from './assets/samosa.png'

function App() {
  const [count, setCount] = useState(0)
  const [multiplier, setMultiplier] = useState(1)

  const updateCount = () => {
    setCount((count) => count + (1 * multiplier))
  }

  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier((multiplier) => multiplier * 2);
      setCount((count) => count - 10);
    }
  }

  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier((multiplier) => multiplier * 5);
      setCount((count) => count - 100);
    }
  }

  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier((multiplier) => multiplier * 10);
      setCount((count) => count - 1000);
    }
  }

  return (
    <div className="App">
      <div>
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img src={Samosa} className="samosa" onClick={updateCount} />    
      </div>
      
    <div className="container">
      <div className="upgrade">
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>2x per click</p>
          <button onClick={buyDoubleStuffed} >10 samosas</button>
      </div>
      <div className="upgrade">
          <h3>Party Pack 🎉</h3>
          <p>5x per click</p>
          <button onClick={buyPartyPack}>100 samosas</button>
      </div>
      <div className="upgrade">
          <h3>Full Feast 👩🏽‍🍳 </h3>
          <p>10x per click</p>
          <button onClick={buyFullFeast}>1000 samosas</button>
      </div>
    </div>

    </div>
  )
}

export default App
