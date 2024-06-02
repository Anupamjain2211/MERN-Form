import React from 'react'
import Home from './pages/Home'
import Responses from './pages/Responses'
import {BrowserRouter, Routes, Route} from "react-router-dom"


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/responses' element={<Responses/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
