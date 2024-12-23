import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer'; // Import Footer component
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp'; // Import SignUp component
import Dashboard from './components/Dashboard'; // Corrected import path
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute component
import './App.css'; // Import the CSS file for styling

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} />
            <Route path="/sign-up" element={<SignUp />} /> {/* Add the Sign-Up route */}
            <Route path="/sign-in" element={<SignIn />} /> {/* Add the Sign-In route */}
          </Routes>
        </main>
        <FooterWrapper />
      </Router>
    </AuthProvider>
  );
};

const FooterWrapper = () => {
  const location = useLocation();
  const noFooterRoutes = ['/dashboard'];

  return !noFooterRoutes.includes(location.pathname) ? <Footer /> : null;
};

export default App;