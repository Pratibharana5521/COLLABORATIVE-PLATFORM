import React, { useState } from "react";
import "./navbar.css"
import { Link } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ForumIcon from '@mui/icons-material/Forum';
import PostAddIcon from '@mui/icons-material/PostAdd';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function Navbar() {
  // const [darkMode, setDarkMode] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);
  

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <div className={`navbarcontainer ${darkMode ? "dark" : ""}`}>
      <div className="navbarleft">
        <span className="logo" onClick={toggleMenu}>
          <MenuIcon />
        </span>
        <span className="name">Colab</span>
      </div>
      <div className="navbarcenter">
        <div className="search-bar">
          <SearchIcon />
          <input placeholder="Search for posts" className="searchInput"></input>
        </div>
      </div>
      <div className="navbarright">
        <span className="option"><Link to="/">Homepage</Link></span>
        <span className="option"><Link to="/forum">Forum</Link></span>
        <span className="option">Posts</span>
        <button className="button">Sign Up</button>
        <button className="button">Log in</button>
        <span className="navIcons">
          <ChatIcon />
        </span>
        <span className="navIcons">
          <NotificationsIcon />
        </span>
        <span className="navIcons" onClick={toggleDarkMode}>
          <DarkModeIcon />
        </span>
      </div>
      <div className={`sidebar ${menuOpen ? "open" : ""} ${darkMode ? "dark" : ""}`}>
      <span className="logo" onClick={toggleMenu}>
          <MenuIcon />
        </span>
        <ul>
          <li><HomeIcon/><Link to="/" className="option2">Home</Link></li>
          <li><ForumIcon/><Link to="/forum" className="option2">Forum</Link></li>
          <li> <PostAddIcon/>Posts</li>
          <li><ChatIcon/>Chat</li>
          <li> <PersonAddIcon/>Sign Up</li>
          <li><LoginIcon/>Log in</li>
          <li onClick={toggleDarkMode}><DarkModeIcon/>Theme</li>
        </ul>
      </div>

    </div>
  )
}
