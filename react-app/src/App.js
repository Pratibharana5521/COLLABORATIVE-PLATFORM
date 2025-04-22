import Home from "./pages/Home";
import Forum from "./pages/ForumPage";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import After from "./pages/After";
import PostDetails from './pages/PostDetails';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate} from "react-router-dom";
import Footer from "./components/Footer";
import { DarkModeProvider } from "./context/DarkModeContext";
import PersonIcon from '@mui/icons-material/Person';
import Createpost from "./components/Createpost";
import Chat from "./components/Chat";
// import { useNavigate } from "react-router-dom"; 




function App() {
    // const navigate = useNavigate();
  return (
    <DarkModeProvider>
      <Router>
    <div className="App">
    <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/forum" element={<Forum/>} /> 
          <Route path="/login" element={<Login/>} /> 
          <Route path="/Signin" element={<Signin/>} /> 
          <Route path="/afterLogin" element={<After/>} /> 
          <Route path="/afterLogin/login" element={<Navigate to="/login" />} /> 
          <Route path="/createPost" element={<Createpost/>} /> 
          <Route path="/chat" element={<Chat/>} /> 
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
    </div>
    </Router>
    </DarkModeProvider>
  );
}

export default App;
