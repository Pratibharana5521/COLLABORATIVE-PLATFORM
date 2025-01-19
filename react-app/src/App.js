import Home from "./pages/Home";
import Forum from "./pages/Forum";
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
          <Route path="/" element={<Home />} /> {/* Home Page */}
          <Route path="/forum" element={<Forum/>} /> {/* Forum Overview Page */}
        </Routes>
    </div>
    </Router>
    </DarkModeProvider>
  );
}

export default App;
