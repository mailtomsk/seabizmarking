import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const [profile, setProfile] = useState({
    name: 'John Driver',
    email: 'john.driver@example.com',
    phone: '+1 (555) 123-4567',
    employeeId: 'DRV-2023-001',
    address: '123 Delivery St, Logistics City, LC 12345',
    joinDate: 'January 15, 2023',
    vehicleType: 'Delivery Van',
    licensePlate: 'DRV-1234'
  });

  const [editing, setEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({...profile});

  const handleEdit = () => {
    setEditing(true);
    setEditedProfile({...profile});
  };

  const handleSave = () => {
    setProfile({...editedProfile});
    setEditing(false);
    Alert.alert('Success', 'Profile information updated successfully');
  };

  const handleCancel = () => {
    setEditing(false);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Image 
            source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} 
            style={styles.profileImage} 
          />
          {editing && (
            <TouchableOpacity style={styles.changePhotoButton}>
              <MaterialIcons name="camera-alt" size={20} color="white" />
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.employeeId}>ID: {profile.employeeId}</Text>
      </View>

      <View style={styles.infoSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          {!editing && (
            <TouchableOpacity onPress={handleEdit}>
              <MaterialIcons name="edit" size={24} color="#4CAF50" />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Full Name</Text>
          {editing ? (
            <TextInput
              style={styles.input}
              value={editedProfile.name}
              onChangeText={(text) => setEditedProfile({...editedProfile, name: text})}
            />
          ) : (
            <Text style={styles.infoValue}>{profile.name}</Text>
          )}
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Email</Text>
          {editing ? (
            <TextInput
              style={styles.input}
              value={editedProfile.email}
              onChangeText={(text) => setEditedProfile({...editedProfile, email: text})}
              keyboardType="email-address"
            />
          ) : (
            <Text style={styles.infoValue}>{profile.email}</Text>
          )}
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Phone</Text>
          {editing ? (
            <TextInput
              style={styles.input}
              value={editedProfile.phone}
              onChangeText={(text) => setEditedProfile({...editedProfile, phone: text})}
              keyboardType="phone-pad"
            />
          ) : (
            <Text style={styles.infoValue}>{profile.phone}</Text>
          )}
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Address</Text>
          {editing ? (
            <TextInput
              style={styles.input}
              value={editedProfile.address}
              onChangeText={(text) => setEditedProfile({...editedProfile, address: text})}
              multiline
            />
          ) : (
            <Text style={styles.infoValue}>{profile.address}</Text>
          )}
        </View>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Work Information</Text>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Employee ID</Text>
          <Text style={styles.infoValue}>{profile.employeeId}</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Join Date</Text>
          <Text style={styles.infoValue}>{profile.joinDate}</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Vehicle Type</Text>
          {editing ? (
            <TextInput
              style={styles.input}
              value={editedProfile.vehicleType}
              onChangeText={(text) => setEditedProfile({...editedProfile, vehicleType: text})}
            />
          ) : (
            <Text style={styles.infoValue}>{profile.vehicleType}</Text>
          )}
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>License Plate</Text>
          {editing ? (
            <TextInput
              style={styles.input}
              value={editedProfile.licensePlate}
              onChangeText={(text) => setEditedProfile({...editedProfile, licensePlate: text})}
            />
          ) : (
            <Text style={styles.infoValue}>{profile.licensePlate}</Text>
          )}
        </View>
      </View>

      {editing && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  changePhotoButton: {
    position: 'absolute',
    bottom: 5,
    right: 0,
    backgroundColor: '#4CAF50',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  employeeId: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  infoSection: {
    backgroundColor: 'white',
    marginTop: 15,
    padding: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  infoItem: {
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 8,
    backgroundColor: '#fafafa',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 4,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  cancelButton: {
    backgroundColor: '#f4f4f4',
    padding: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '500',
  },
}); 