import Home from "./pages/Home";
// import ForumPage from "./pages/ForumPage";
// import PostDetails from "./pages/PostDetails";
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
import ForumPage from "./pages/ForumPage";
import MyPosts from "./pages/MyPosts";
// import { useNavigate } from "react-router-dom"; 




function App() {
    // const navigate = useNavigate();
  return (
    <DarkModeProvider>
      <Router>
    <div className="App">
    <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/upload/post" element={<Createpost />} /> 
          <Route path="/forum" element={<ForumPage/>} /> 
          <Route path="/posts" element={<PostDetails/>} /> 
          <Route path="/posts/login" element={<Login/>} />
          <Route path="/login" element={<Login/>} /> 
          <Route path="/SignUp" element={<Signin/>} /> 
          <Route path="/afterLogin" element={<After/>} /> 
          <Route path="/afterLogin/login" element={<Navigate to="/login" />} /> 
          <Route path="/createPost" element={<Createpost/>} />
          <Route path="/createPost/Login" element={<Login/>} /> 
          <Route path="/discussion/page" element={<Chat/>} /> 
          <Route path="/discussion/page/login" element={<Login/>} /> 
          {/* <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/myPosts/:id" element={<MyPosts />} /> */}

        </Routes>
    </div>
    </Router>
    </DarkModeProvider>
  );
}

export default App;
