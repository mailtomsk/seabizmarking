import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function FeaturesScreen() {
  // Feature states
  const [features, setFeatures] = useState({
    photoCapture: true,
    signatureCapture: true,
    barcodeScanning: true,
    offlineMode: true,
    routeOptimization: false,
    customerNotes: true,
    invoiceHistory: true,
    deliveryTracking: true,
    pushNotifications: true,
    reportGeneration: false
  });

  // Toggle a feature
  const toggleFeature = (feature) => {
    setFeatures({
      ...features,
      [feature]: !features[feature]
    });
  };

  // Render a feature item
  const renderFeatureItem = (name, icon, description, key) => (
    <View style={styles.featureItem}>
      <View style={styles.featureLeft}>
        <MaterialIcons name={icon} size={24} color="#4CAF50" style={styles.icon} />
        <View style={styles.featureTextContainer}>
          <Text style={styles.featureTitle}>{name}</Text>
          <Text style={styles.featureDescription}>{description}</Text>
        </View>
      </View>
      <Switch
        value={features[key]}
        onValueChange={() => toggleFeature(key)}
        trackColor={{ false: "#ccc", true: "#8BC34A" }}
        thumbColor={features[key] ? "#4CAF50" : "#f4f3f4"}
      />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>App Features</Text>
        <Text style={styles.headerSubtitle}>Enable or disable app features</Text>
      </View>

      <View style={styles.featuresContainer}>
        {renderFeatureItem(
          'Photo Capture',
          'photo-camera',
          'Take photos of deliveries and invoices',
          'photoCapture'
        )}
        
        {renderFeatureItem(
          'Signature Capture',
          'gesture',
          'Collect customer signatures on delivery',
          'signatureCapture'
        )}
        
        {renderFeatureItem(
          'Barcode Scanning',
          'qr-code-scanner',
          'Scan barcodes for quick invoice lookup',
          'barcodeScanning'
        )}
        
        {renderFeatureItem(
          'Offline Mode',
          'wifi-off',
          'Work without internet connection',
          'offlineMode'
        )}
        
        {renderFeatureItem(
          'Route Optimization',
          'map',
          'Optimize delivery routes for efficiency',
          'routeOptimization'
        )}
        
        {renderFeatureItem(
          'Customer Notes',
          'note',
          'Add and view notes for each customer',
          'customerNotes'
        )}
        
        {renderFeatureItem(
          'Invoice History',
          'history',
          'View past invoices and delivery history',
          'invoiceHistory'
        )}
        
        {renderFeatureItem(
          'Delivery Tracking',
          'location-on',
          'Track delivery locations and times',
          'deliveryTracking'
        )}
        
        {renderFeatureItem(
          'Push Notifications',
          'notifications',
          'Receive alerts for new deliveries',
          'pushNotifications'
        )}
        
        {renderFeatureItem(
          'Report Generation',
          'assessment',
          'Generate delivery and performance reports',
          'reportGeneration'
        )}
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  featuresContainer: {
    backgroundColor: 'white',
    marginTop: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  featureItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  featureLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    marginRight: 15,
  },
  featureTextContainer: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 3,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    margin: 20,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 