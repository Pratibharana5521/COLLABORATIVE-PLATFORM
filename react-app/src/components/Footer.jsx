import React from 'react'
import "./footer.css"
import { useDarkMode } from '../context/DarkModeContext';

export default function Footer() {
    const { darkMode } = useDarkMode();
    
  return (
    <footer className={`"footer" ${darkMode ? "dark" : ""}`}>
      <div className="footer-content">
        <p>© 2025 Colab. All Rights Reserved.</p>
      <p>Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  )
}


