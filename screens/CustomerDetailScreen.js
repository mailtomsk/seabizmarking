import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function CustomerDetailScreen({ route, navigation }) {
  const { customer } = route.params;
  const [invoices, setInvoices] = useState([]);

  // Sample invoice data - in a real app, this would come from an API
  const sampleInvoices = [
    { id: '1', number: 'INV000052', reference: 'HPBKL256', photoCount: 3 },
    { id: '2', number: 'INV000053', reference: 'HPBKL257', photoCount: 5 },
    { id: '3', number: 'INV000054', reference: 'HPBKL258', photoCount: 2 },
    { id: '4', number: 'INV000055', reference: 'HPBKL259', photoCount: 0 },
    { id: '5', number: 'INV000056', reference: 'HPBKL260', photoCount: 1 },
  ];

  useEffect(() => {
    // Set the navigation title to the customer name
    navigation.setOptions({
      title: customer.name,
    });
    
    // Load invoices - in a real app, you would fetch these from an API
    setInvoices(sampleInvoices);
  }, [navigation, customer]);

  // Render each invoice item
  const renderInvoiceItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.invoiceItem}
      onPress={() => {
        navigation.navigate('InvoicePhoto', { 
          invoice: item,
          customer: customer
        });
      }}
    >
      <View style={styles.invoiceContent}>
        <Text style={styles.invoiceNumber}>{item.number}</Text>
        <Text style={styles.invoiceReference}>~ {item.reference}</Text>
      </View>
      <View style={styles.photoContainer}>
        <MaterialIcons name="photo-library" size={20} color="#4CAF50" />
        <Text style={styles.photoCount}>{item.photoCount}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.customerInfo}>
        <View style={styles.infoRow}>
          <MaterialIcons name="location-on" size={20} color="#666" />
          <Text style={styles.infoText}>{customer.address}</Text>
        </View>
        <View style={styles.infoRow}>
          <MaterialIcons name="phone" size={20} color="#666" />
          <Text style={styles.infoText}>{customer.phone}</Text>
        </View>
        <View style={styles.infoRow}>
          <MaterialIcons name="access-time" size={20} color="#666" />
          <Text style={styles.infoText}>Delivery Time: {customer.time}</Text>
        </View>
      </View>

      <View style={styles.invoiceHeader}>
        <Text style={styles.invoiceHeaderText}>Invoices for {customer.name}</Text>
      </View>

      <FlatList
        data={invoices}
        renderItem={renderInvoiceItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  customerInfo: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
    flex: 1,
  },
  invoiceHeader: {
    backgroundColor: '#4CAF50',
    padding: 15,
  },
  invoiceHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  listContainer: {
    padding: 15,
  },
  invoiceItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  invoiceContent: {
    flex: 1,
  },
  invoiceNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  invoiceReference: {
    fontSize: 14,
    color: '#666',
    marginTop: 3,
  },
  photoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  photoCount: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
}); 