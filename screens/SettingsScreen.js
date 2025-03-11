import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Switch, 
  TouchableOpacity, 
  ScrollView,
  Alert
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useAuth } from '../AuthContext';

export default function SettingsScreen({ navigation }) {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [locationTracking, setLocationTracking] = useState(true);
  const { logout } = useAuth();

  const handleLogout = () => {
    // Direct logout without confirmation for testing
    logout();
    
    // If you want the confirmation dialog, use this instead:
    /*
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { 
          text: "Logout", 
          onPress: () => {
            logout();
          },
          style: "destructive"
        }
      ]
    );
    */
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity 
          style={styles.settingItem}
          onPress={() => navigation.navigate('Profile')}
        >
          <View style={styles.settingLeft}>
            <MaterialIcons name="person" size={24} color="#4CAF50" style={styles.icon} />
            <Text style={styles.settingText}>Profile Information</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color="#ccc" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.settingItem}
          onPress={() => navigation.navigate('Password')}
        >
          <View style={styles.settingLeft}>
            <MaterialIcons name="security" size={24} color="#4CAF50" style={styles.icon} />
            <Text style={styles.settingText}>Change Password</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color="#ccc" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <MaterialIcons name="notifications" size={24} color="#4CAF50" style={styles.icon} />
            <Text style={styles.settingText}>Notifications</Text>
          </View>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: "#ccc", true: "#8BC34A" }}
            thumbColor={notifications ? "#4CAF50" : "#f4f3f4"}
          />
        </View>
        
        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <MaterialIcons name="brightness-4" size={24} color="#4CAF50" style={styles.icon} />
            <Text style={styles.settingText}>Dark Mode</Text>
          </View>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: "#ccc", true: "#8BC34A" }}
            thumbColor={darkMode ? "#4CAF50" : "#f4f3f4"}
          />
        </View>
        
        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <MaterialIcons name="location-on" size={24} color="#4CAF50" style={styles.icon} />
            <Text style={styles.settingText}>Location Tracking</Text>
          </View>
          <Switch
            value={locationTracking}
            onValueChange={setLocationTracking}
            trackColor={{ false: "#ccc", true: "#8BC34A" }}
            thumbColor={locationTracking ? "#4CAF50" : "#f4f3f4"}
          />
        </View>
        
        <TouchableOpacity 
          style={styles.settingItem}
          onPress={() => navigation.navigate('Features')}
        >
          <View style={styles.settingLeft}>
            <MaterialIcons name="tune" size={24} color="#4CAF50" style={styles.icon} />
            <Text style={styles.settingText}>App Features</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color="#ccc" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        <TouchableOpacity 
          style={styles.settingItem}
          onPress={() => navigation.navigate('HelpSupport')}
        >
          <View style={styles.settingLeft}>
            <MaterialIcons name="help" size={24} color="#4CAF50" style={styles.icon} />
            <Text style={styles.settingText}>Help & Support</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color="#ccc" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.settingItem}
          onPress={() => navigation.navigate('About')}
        >
          <View style={styles.settingLeft}>
            <MaterialIcons name="info" size={24} color="#4CAF50" style={styles.icon} />
            <Text style={styles.settingText}>About</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color="#ccc" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={styles.logoutButton} 
        onPress={handleLogout}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 15,
    marginTop: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 10,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
  },
  settingText: {
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#f44336',
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 20,
    padding: 15,
    alignItems: 'center',
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 