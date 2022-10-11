import Home from "./Screens/Home"
import About from "./Screens/About"
import React from "react"
import { useState } from "react"
import "./App.css"
import Contact from "./Screens/Contact"
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom"

const App = () =>{
  return (
    <>
    <BrowserRouter>
      <ul>
        <Link to="/home">
          <li>Home</li>
        </Link>
         <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      <Routes>
        <Route element={<Navigate to="/home"/>} path="*"/>
        <Route element={<Home/>} path="/"/>
        <Route element={<Home/>} path="/home" />
        <Route element={<About/>} path="/about" />
        <Route element={<Contact/>} path="/contact" />
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App