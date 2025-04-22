import React, { useEffect, useState } from "react";
import "./navlogin.css"
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
import { handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";

export default function Navlogin() {
  // const [darkMode, setDarkMode] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  
    // const handleGetStarted = () => {
    //   navigate("/login"); 
    // };
    // const handleSignin = () => {
    //   navigate("/Signin"); 
    // };
    const [loggedInUser , setLoggedInUser] = useState('');
    useEffect(()=>{
      setLoggedInUser(localStorage.getItem('loggedInUser'))
    },[])
    
    const handleLogout =(e)=>{
      localStorage.removeItem('token')
      localStorage.removeItem('loggedInUser')
      setTimeout(()=>{
        navigate('./login');
      },1000)
      handleSuccess("Log Out Successfully")
      
    }

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
        <span className="name1" >{loggedInUser}</span>
        <button className="button" onClick={handleLogout}>Log Out</button>
        
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
          <li> <PersonAddIcon/><Link to="/Signin" className="option2">Sign Up</Link></li>
          <li><LoginIcon/><Link to="/login" className="option2">Log in</Link></li>
          <li onClick={toggleDarkMode}><DarkModeIcon/>Theme</li>
        </ul>
      </div>
      <ToastContainer />

    </div>
  )
}
