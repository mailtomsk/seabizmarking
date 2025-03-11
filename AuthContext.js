import React, { createContext, useState, useContext } from 'react';

// Create the authentication context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Login function
  const login = () => {
    console.log('Logging in...', new Date().toISOString());
    setIsLoggedIn(true);
  };

  // Logout function
  const logout = () => {
    console.log('Logging out...', new Date().toISOString());
    setIsLoggedIn(false);
  };

  // Context value
  const value = {
    isLoggedIn,
    login,
    logout
  };

  console.log('Auth context current state:', isLoggedIn, new Date().toISOString());

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 