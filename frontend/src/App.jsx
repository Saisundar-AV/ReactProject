import { useState } from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import {BrowserRouter,Routes,Route }from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          Home
        </Route>
        <Route path='/login' element={<Login />}>
          Login
        </Route>
        <Route path="/signup" element={<Signup/>}>
          Signup
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
