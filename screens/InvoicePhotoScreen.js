import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

const { width } = Dimensions.get('window');
const photoSize = (width - 60) / 3;

export default function InvoicePhotoScreen({ route, navigation }) {
  const { invoice, customer } = route.params;
  const [photos, setPhotos] = useState([]);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraVisible, setCameraVisible] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const cameraRef = useRef(null);

  useEffect(() => {
    // Set the navigation title
    navigation.setOptions({
      title: `Photos for ${invoice.number}`,
    });

    // Request camera permissions
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();

    // Load existing photos if any
    // In a real app, you would fetch these from storage or an API
    if (invoice.photoCount > 0) {
      // For demo purposes, we'll create placeholder images
      const existingPhotos = Array.from({ length: invoice.photoCount }, (_, i) => ({
        id: `existing-${i}`,
        uri: 'https://via.placeholder.com/300/4CAF50/FFFFFF?text=Photo+' + (i + 1),
        isExisting: true
      }));
      setPhotos(existingPhotos);
    }
  }, [navigation, invoice]);

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        setPhotos([...photos, { id: Date.now().toString(), uri: photo.uri }]);
        setCameraVisible(false);
      } catch (error) {
        console.error('Error taking picture:', error);
        Alert.alert('Error', 'Failed to take picture. Please try again.');
      }
    }
  };

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setPhotos([...photos, { id: Date.now().toString(), uri: result.assets[0].uri }]);
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'Failed to pick image. Please try again.');
    }
  };

  const removePhoto = (photoId) => {
    Alert.alert(
      'Remove Photo',
      'Are you sure you want to remove this photo?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Remove', 
          onPress: () => {
            setPhotos(photos.filter(photo => photo.id !== photoId));
          },
          style: 'destructive'
        }
      ]
    );
  };

  const handleSaveAll = () => {
    if (photos.length === 0) {
      Alert.alert('No Photos', 'Please take at least one photo before saving.');
      return;
    }

    setIsSaving(true);

    // Simulate saving process
    setTimeout(() => {
      setIsSaving(false);
      
      // Don't use Alert, just navigate back immediately
      navigation.goBack();
      
      // Show a toast or some other non-blocking notification instead
      // You could use react-native-toast-message or similar library
      // For now, we'll just navigate back directly
    }, 1500);
  };

  const renderPhotoItem = ({ item }) => (
    <View style={styles.photoItemContainer}>
      <Image source={{ uri: item.uri }} style={styles.photoThumbnail} />
      <TouchableOpacity 
        style={styles.removeButton}
        onPress={() => removePhoto(item.id)}
      >
        <MaterialIcons name="close" size={16} color="white" />
      </TouchableOpacity>
    </View>
  );

  if (hasPermission === null) {
    return <View style={styles.centered}><ActivityIndicator size="large" color="#4CAF50" /></View>;
  }

  if (hasPermission === false) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>No access to camera</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={pickImage}
        >
          <MaterialIcons name="photo-library" size={24} color="white" />
          <Text style={styles.buttonText}>Select from Gallery</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (cameraVisible) {
    return (
      <View style={styles.cameraContainer}>
        <Camera 
          style={styles.camera} 
          type={Camera.Constants.Type.back}
          ref={cameraRef}
        >
          <View style={styles.cameraControls}>
            <TouchableOpacity 
              style={styles.cancelButton}
              onPress={() => setCameraVisible(false)}
            >
              <MaterialIcons name="close" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.captureButton}
              onPress={takePicture}
            >
              <View style={styles.captureButtonInner} />
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.infoCard}>
        <Text style={styles.invoiceTitle}>
          {invoice.number} ~ {invoice.reference}
        </Text>
        <Text style={styles.customerName}>{customer.name}</Text>
      </View>

      <View style={styles.photoSection}>
        <View style={styles.photoHeader}>
          <Text style={styles.photoTitle}>Photos ({photos.length})</Text>
          <View style={styles.photoActions}>
            <TouchableOpacity 
              style={[styles.photoAction, styles.galleryButton]}
              onPress={pickImage}
            >
              <MaterialIcons name="photo-library" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.photoAction, styles.cameraButton]}
              onPress={() => setCameraVisible(true)}
            >
              <MaterialIcons name="camera-alt" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {photos.length > 0 ? (
          <FlatList
            data={photos}
            renderItem={renderPhotoItem}
            keyExtractor={item => item.id}
            numColumns={3}
            contentContainerStyle={styles.photoGrid}
          />
        ) : (
          <View style={styles.emptyState}>
            <MaterialIcons name="photo-camera" size={60} color="#ccc" />
            <Text style={styles.emptyText}>No Photos Yet</Text>
            <Text style={styles.emptySubtext}>
              Take photos or select from your gallery to attach to this invoice.
            </Text>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => setCameraVisible(true)}
            >
              <MaterialIcons name="camera-alt" size={20} color="white" />
              <Text style={styles.buttonText}>Take Photo</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {photos.length > 0 && (
        <View style={styles.saveButtonContainer}>
          <TouchableOpacity 
            style={styles.saveButton}
            onPress={handleSaveAll}
            disabled={isSaving}
          >
            <MaterialIcons name="save" size={24} color="white" />
            <Text style={styles.saveButtonText}>
              {isSaving ? 'Saving...' : 'Save All Photos'}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {isSaving && (
        <View style={styles.savingOverlay}>
          <ActivityIndicator size="large" color="white" />
          <Text style={styles.savingText}>Saving photos...</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoCard: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  invoiceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  customerName: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  photoSection: {
    flex: 1,
    padding: 15,
  },
  photoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  photoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  photoActions: {
    flexDirection: 'row',
  },
  photoAction: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  galleryButton: {
    backgroundColor: '#8BC34A',
  },
  cameraButton: {
    backgroundColor: '#4CAF50',
  },
  photoGrid: {
    paddingBottom: 80,
  },
  photoItemContainer: {
    width: photoSize,
    height: photoSize,
    margin: 5,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  photoThumbnail: {
    width: '100%',
    height: '100%',
  },
  removeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
    marginTop: 10,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginTop: 5,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
  saveButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  saveButton: {
    flexDirection: 'row',
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  headerButton: {
    paddingHorizontal: 15,
  },
  headerButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  cameraContainer: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  cameraControls: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 30,
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 5,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButtonInner: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
  },
  cancelButton: {
    position: 'absolute',
    top: 30,
    left: 30,
  },
  savingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  savingText: {
    color: 'white',
    fontSize: 18,
    marginTop: 15,
  },
}); 