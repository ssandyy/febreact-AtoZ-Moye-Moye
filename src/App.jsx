import { useState } from 'react'
import './App.css'
import About from './screens/About'
import Contact from './screens/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello React..!</h1>
      <About />
      <Contact />
    </>
  )
}

export default App
