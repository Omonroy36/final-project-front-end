import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
         {/*  <Route path='/' element={}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
