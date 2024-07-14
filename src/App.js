import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import NavigationMenu from './NavigationMenu';
import Home from './Components/Files/Home'; // Assuming you have a Home component
import ContactUs from './Components/Files/Contact';
import Gallery from './Components/Files/Gallery';
import Achievements from './Components/Files/Achievements';
import NotFound from './Components/Files/NotFound'; // Assuming you have a NotFound component for 404

function App() {
  return (
    <Router>
      <div>
       
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/achievements" element={<Achievements />} />

          <Route path="/PhotoGallery" element={<Gallery/>} />
          <Route path="/ContactUs" element={<ContactUs/>} />
          <Route  path="*"element={<NotFound/>} /> {/* Handle 404 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
