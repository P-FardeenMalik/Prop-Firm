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
import ForgotPassword from './pages/ForgotPassword'; // Import ForgotPassword component
import './App.css'; // Import the CSS file for styling

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <HeaderWrapper />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} /> {/* Add the Home route */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard/*" element={<PrivateRoute element={Dashboard} />} />
            <Route path="/sign-up" element={<SignUp />} /> {/* Add the Sign-Up route */}
            <Route path="/sign-in" element={<SignIn />} /> {/* Add the Sign-In route */}
            <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Add the Forgot Password route */}
          </Routes>
        </main>
        <FooterWrapper />
      </Router>
    </AuthProvider>
  );
};

const HeaderWrapper = () => {
  const location = useLocation();
  const noHeaderRoutes = ['/dashboard'];

  // Check if the current path starts with any of the noHeaderRoutes
  const shouldShowHeader = !noHeaderRoutes.some(route => location.pathname.startsWith(route));

  return shouldShowHeader ? <Header /> : null;
};

const FooterWrapper = () => {
  const location = useLocation();
  const noFooterRoutes = ['/dashboard', '/sign-in', '/sign-up'];

  // Check if the current path starts with any of the noFooterRoutes
  const shouldShowFooter = !noFooterRoutes.some(route => location.pathname.startsWith(route));

  return shouldShowFooter ? <Footer /> : null;
};

export default App;