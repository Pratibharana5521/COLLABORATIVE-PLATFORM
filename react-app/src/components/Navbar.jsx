import React, { useState } from "react";
import "./navbar.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };
  const handleSignin = () => {
    navigate("/Signin");
  };


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
      <div className="navbarcenter" id="sb" >
        <div className="search-bar">
          <SearchIcon />
          <input
            placeholder="Search for posts"
            className="searchInput"
          />
        </div>
      </div>
      <div className="navbarright">
        <span className="option"><Link to="/">Homepage</Link></span>
        <span className="option"><Link to="/Login">MyPosts</Link></span>
        <span className="option"><Link to="/Login">Create</Link></span>
        <span className="option"><Link to="/posts">Posts</Link></span>
        <button className="button" onClick={handleSignin}>Sign Up</button>
        <button className="button" onClick={handleGetStarted}>Log in</button>
        <span className="navIcons"><Link to="/chat">
          <ChatIcon /></Link>
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
          <li><HomeIcon /><Link to="/" className="option2">Home</Link></li>
          {/* <li><ForumIcon /><Link to="/Login" className="option2">Forum</Link></li> */}
          <li> <PostAddIcon /><Link to="/Login" className="option2">Add Post</Link></li>
          <li><ChatIcon /><Link to="/Login" className="option2">Chat</Link></li>
          <li> <PersonAddIcon /><Link to="/SignUp" className="option2">Sign Up</Link></li>
          <li><LoginIcon /><Link to="/Login" className="option2">Log in</Link></li>
          <li onClick={toggleDarkMode}><DarkModeIcon />Theme</li>
        </ul>
      </div>

    </div>
  )
}
