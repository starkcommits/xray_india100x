import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="">
        <h1 className="">Vite + React + Frappe</h1>
        <div className="card flex flex-col gap-6">
          <div>
            <button className="" onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
          </div>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App
