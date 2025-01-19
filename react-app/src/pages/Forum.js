import React from 'react'
import "./forum.css"
import { useDarkMode } from "../context/DarkModeContext"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


function Forum() {
  const { darkMode } = useDarkMode();
    return (
      <div className={`forum ${darkMode ? 'dark' : ''}`}>
        <Navbar/>
        <div className="main-content">
          <h1>Welcome to your collaborative hub!</h1>
          <p>Collaboration that Inspires Change for Innovation and Growth</p>
        </div>
        <Footer/>
      </div>
    )
}

export default Forum