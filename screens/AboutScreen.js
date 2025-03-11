import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function AboutScreen() {
  const appVersion = '1.2.3';
  const buildNumber = '45';
  const releaseDate = 'June 15, 2023';
  
  const openWebsite = () => {
    Linking.openURL('https://www.seabizmarking.com');
  };
  
  const openPrivacyPolicy = () => {
    Linking.openURL('https://www.seabizmarking.com/privacy');
  };
  
  const openTermsOfService = () => {
    Linking.openURL('https://www.seabizmarking.com/terms');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('../assets/icon.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.appName}>Seabiz Marking</Text>
        <Text style={styles.appVersion}>Version {appVersion} (Build {buildNumber})</Text>
        <Text style={styles.releaseDate}>Released on {releaseDate}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Us</Text>
        <Text style={styles.aboutText}>
          Seabiz Marking is a comprehensive delivery management solution designed to streamline 
          the logistics process for drivers and businesses. Our app helps drivers manage deliveries, 
          capture photos of invoices, and maintain accurate records of all transactions.
        </Text>
        <Text style={styles.aboutText}>
          Founded in 2020, Seabiz Marking has grown to serve hundreds of businesses across the country, 
          helping them improve efficiency and customer satisfaction through better delivery management.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Legal Information</Text>
        <TouchableOpacity style={styles.linkItem} onPress={openPrivacyPolicy}>
          <MaterialIcons name="privacy-tip" size={24} color="#4CAF50" />
          <Text style={styles.linkText}>Privacy Policy</Text>
          <MaterialIcons name="chevron-right" size={24} color="#ccc" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.linkItem} onPress={openTermsOfService}>
          <MaterialIcons name="description" size={24} color="#4CAF50" />
          <Text style={styles.linkText}>Terms of Service</Text>
          <MaterialIcons name="chevron-right" size={24} color="#ccc" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Connect With Us</Text>
        <TouchableOpacity style={styles.linkItem} onPress={openWebsite}>
          <MaterialIcons name="language" size={24} color="#4CAF50" />
          <Text style={styles.linkText}>Visit Our Website</Text>
          <MaterialIcons name="chevron-right" size={24} color="#ccc" />
        </TouchableOpacity>
        
        <View style={styles.socialLinks}>
          <TouchableOpacity style={styles.socialButton}>
            <MaterialIcons name="facebook" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <MaterialIcons name="twitter" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <MaterialIcons name="linkedin" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <MaterialIcons name="email" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2023 Seabiz Marking. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  appVersion: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  releaseDate: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  section: {
    backgroundColor: 'white',
    marginTop: 15,
    padding: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  aboutText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
    marginBottom: 15,
  },
  linkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  linkText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
    flex: 1,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#888',
  },
}); 