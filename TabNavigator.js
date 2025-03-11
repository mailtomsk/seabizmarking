import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import MarksScreen from './screens/MarksScreen';
import SettingsScreen from './screens/SettingsScreen';
import CustomerDetailScreen from './screens/CustomerDetailScreen';
import InvoicePhotoScreen from './screens/InvoicePhotoScreen';
import FeaturesScreen from './screens/FeaturesScreen';
import ProfileScreen from './screens/ProfileScreen';
import PasswordScreen from './screens/PasswordScreen';
import HelpSupportScreen from './screens/HelpSupportScreen';
import AboutScreen from './screens/AboutScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const SettingsStack = createStackNavigator();

// Home stack with nested screens
function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4CAF50',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{ title: 'Home' }}
      />
      <Stack.Screen 
        name="CustomerDetail" 
        component={CustomerDetailScreen} 
        options={({ route }) => ({ title: route.params.customer.name })}
      />
      <Stack.Screen 
        name="InvoicePhoto" 
        component={InvoicePhotoScreen} 
        options={{ title: 'Invoice Photos' }}
      />
    </Stack.Navigator>
  );
}

// Settings stack with nested screens
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4CAF50',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <SettingsStack.Screen 
        name="SettingsScreen" 
        component={SettingsScreen} 
        options={{ title: 'Settings' }}
      />
      <SettingsStack.Screen 
        name="Features" 
        component={FeaturesScreen} 
        options={{ title: 'App Features' }}
      />
      <SettingsStack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ title: 'Profile Information' }}
      />
      <SettingsStack.Screen 
        name="Password" 
        component={PasswordScreen} 
        options={{ title: 'Change Password' }}
      />
      <SettingsStack.Screen 
        name="HelpSupport" 
        component={HelpSupportScreen} 
        options={{ title: 'Help & Support' }}
      />
      <SettingsStack.Screen 
        name="About" 
        component={AboutScreen} 
        options={{ title: 'About' }}
      />
    </SettingsStack.Navigator>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeStack} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Marks" 
        component={MarksScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="assessment" color={color} size={size} />
          ),
          headerStyle: {
            backgroundColor: '#4CAF50',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShown: true,
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
} 