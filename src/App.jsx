import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import About from './screens/About'
import Register from './screens/Register'
import Schools from './screens/Schools'
import UserList from './screens/UserList'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "users",
    element: <UserList />
  },
  {
    path: "schools",
    element: <Schools />
  }
]);


function App() {

  return (
    <>
      <h1>Hello React..!</h1>
      
      {/* <Register />
      <Signup />
      <About />
      <Contact />
      <UserList />
      <Schools /> */} 

      <RouterProvider router={router} />
    </>
  )
}

export default App
