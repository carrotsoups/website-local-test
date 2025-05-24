import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import Aframe3D from './pages/Aframe3D';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aframe3d" element={<Aframe3D />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
