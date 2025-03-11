import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function HomeScreen({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [customerList, setCustomerList] = useState([]);

  // Sample customer data - in a real app, this would come from an API
  const sampleCustomers = [
    { id: '1', name: 'John Smith', address: '123 Main St, City Center', phone: '(555) 123-4567', time: '09:30 AM' },
    { id: '2', name: 'Sarah Johnson', address: '456 Oak Ave, Downtown', phone: '(555) 234-5678', time: '10:45 AM' },
    { id: '3', name: 'Michael Brown', address: '789 Pine Rd, Westside', phone: '(555) 345-6789', time: '12:15 PM' },
    { id: '4', name: 'Emily Davis', address: '321 Maple Dr, Eastside', phone: '(555) 456-7890', time: '02:00 PM' },
    { id: '5', name: 'Robert Wilson', address: '654 Cedar Ln, Northside', phone: '(555) 567-8901', time: '03:30 PM' },
    { id: '6', name: 'Jennifer Taylor', address: '987 Birch Blvd, Southside', phone: '(555) 678-9012', time: '04:45 PM' },
  ];

  // Format date for display
  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  // Handle date change
  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
    
    // In a real app, you would fetch customer data for the selected date
    // For this demo, we'll just use the sample data
    setCustomerList(sampleCustomers);
  };

  // Load initial customer data
  useEffect(() => {
    setCustomerList(sampleCustomers);
  }, []);

  // Render each customer item
  const renderCustomerItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.customerItem}
      onPress={() => navigation.navigate('CustomerDetail', { customer: item })}
    >
      <View style={styles.customerHeader}>
        <Text style={styles.customerName}>{item.name}</Text>
        <Text style={styles.deliveryTime}>{item.time}</Text>
      </View>
      <View style={styles.customerDetails}>
        <View style={styles.detailRow}>
          <MaterialIcons name="location-on" size={16} color="#666" />
          <Text style={styles.detailText}>{item.address}</Text>
        </View>
        <View style={styles.detailRow}>
          <MaterialIcons name="phone" size={16} color="#666" />
          <Text style={styles.detailText}>{item.phone}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Date Selector */}
      <View style={styles.dateContainer}>
        <TouchableOpacity 
          style={styles.dateSelector} 
          onPress={() => setShowDatePicker(true)}
        >
          <MaterialIcons name="calendar-today" size={24} color="#4CAF50" />
          <Text style={styles.dateText}>{formatDate(date)}</Text>
          <MaterialIcons name="arrow-drop-down" size={24} color="#4CAF50" />
        </TouchableOpacity>
        
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onDateChange}
          />
        )}
      </View>

      {/* Schedule Header */}
      <View style={styles.scheduleHeader}>
        <Text style={styles.scheduleTitle}>Today's Delivery Schedule</Text>
        <Text style={styles.scheduleCount}>{customerList.length} customers</Text>
      </View>

      {/* Customer List */}
      <FlatList
        data={customerList}
        renderItem={renderCustomerItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  dateContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  dateSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    marginHorizontal: 10,
  },
  scheduleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#4CAF50',
  },
  scheduleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  scheduleCount: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '500',
  },
  listContainer: {
    padding: 15,
  },
  customerItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  customerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  customerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  deliveryTime: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4CAF50',
  },
  customerDetails: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  detailText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
    flex: 1,
  },
}); 