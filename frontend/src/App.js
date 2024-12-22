import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './components/Dashboard'; // Ensure the correct import path
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn'; // Import the SignIn component

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sign-up" element={<SignUp />} /> {/* Add the Sign-Up route */}
          <Route path="/sign-in" element={<SignIn />} /> {/* Add the Sign-In route */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;