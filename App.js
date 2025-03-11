import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './LoginScreen';
import TabNavigator from './TabNavigator';
import { AuthProvider, useAuth } from './AuthContext';

// Main app content that uses the auth context
function AppContent() {
  const { isLoggedIn, login } = useAuth();

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <TabNavigator />
      ) : (
        <LoginScreen onLoginSuccess={login} />
      )}
    </NavigationContainer>
  );
}

// Main App component that provides the auth context
export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
