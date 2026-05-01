import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import RequestService from './components/contactPart/RequestService';

function App() {
  return (
    <div>
    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/requestService" element={<RequestService/>} />
      </Routes>
    </div>
  );
}

export default App;