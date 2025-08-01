import './App.css'
import Home from "./Components/Home"

import {Routes, Route} from "react-router-dom"
import RegisterForm from './Components/RegisterForm'
import { useState } from 'react'

function App() {
  const [publicId,setPublicId]=useState("v");
  

  return (

    <div>
      <Routes>
        <Route path="/" element={<Home publicId={publicId}/>}/>
        <Route path="/register" element={<RegisterForm publicId={publicId} setPublicId={setPublicId} />}/>
      </Routes>
      
    </div>
    
  )
}

export default App
