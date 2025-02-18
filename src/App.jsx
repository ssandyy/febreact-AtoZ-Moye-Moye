import { useState } from 'react'
import './App.css'
import About from './screens/About'
import Contact from './screens/Contact'
import Register from './screens/Register'
import UserList from './screens/UserList'
import Schools from './screens/Schools'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello React..!</h1>
      <Register />
      <About />
      <Contact />
      <UserList />
      <Schools />
    </>
  )
}

export default App
