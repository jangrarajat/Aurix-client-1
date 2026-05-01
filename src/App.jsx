import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import RequestService from './components/contactPart/RequestService';
import ServicePage from './pages/ServicePage'; 

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/requestService" element={<RequestService/>} />
        
      
        <Route path="/services/:serviceId" element={<ServicePage />} />
      </Routes>
    </div>
  );
}

export default App;