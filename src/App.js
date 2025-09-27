import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import About from './pages/About';
import Education from './pages/Education';
import Project from './pages/Project';
import Hobby from './pages/Hobby';
import './App.css';
import './theme.css';

function App() {
  return (
   <div className="App">
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/about" component={About} />
          <Route path="/education" component={Education} />
          <Route path="/project" component={Project} />
          <Route path="/hobby" component={Hobby} />
        </Routes>
     
    </Router>
     </div>
  );
}

export default App;