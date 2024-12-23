import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState({
    firstName: '',
    profilePic: null,
  });

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserProfile({ firstName: '', profilePic: null });
  };

  const updateProfile = (profile) => {
    setUserProfile(profile);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, userProfile, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);