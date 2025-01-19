import React from "react"
import "./home.css"
import { useDarkMode } from "../context/DarkModeContext"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Home() {
  const { darkMode } = useDarkMode();
  return (
    <div className={`home ${darkMode ? 'dark' : ''}`}>
      <Navbar/>
      <div className="main-content">
        <h1>Welcome to your collaborative hub!</h1>
        <p>Collaboration that Inspires Change for Innovation and Growth</p>
        <button className="cta-button">Get Started</button>
      </div>
      <Footer/>
    </div>
  )
}

export default Home