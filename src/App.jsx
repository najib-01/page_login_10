import React from "react"
import "./file.css"
import { Routes, Route } from 'react-router-dom';
import Login_page from "./Login_page";
import Register_page from "./Register_page";
import Forgot_password_page from "./Forgot_password_page";

function App() {


  return (
       <>
      <Routes>
        <Route path='/' element={<Login_page />}/>
        <Route path='/register' element={<Register_page />}/>
        <Route path='/forgot_password' element={<Forgot_password_page />}/>
      </Routes>
    </>
  )
}

export default App
