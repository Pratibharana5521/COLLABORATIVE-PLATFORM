import Home from "./pages/Home";
import Forum from "./pages/Forum";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { DarkModeProvider } from "./context/DarkModeContext";
import PersonIcon from '@mui/icons-material/Person';



function App() {
  return (
    <DarkModeProvider>
      <Router>
    <div className="App">
    <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/forum" element={<Forum/>} /> 
          <Route path="/login" element={<Login/>} /> 
          <Route path="/Signin" element={<Signin/>} /> 
        </Routes>
    </div>
    </Router>
    </DarkModeProvider>
  );
}

export default App;
