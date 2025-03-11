import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function HelpSupportScreen() {
  const faqs = [
    {
      question: 'How do I capture photos for an invoice?',
      answer: 'Navigate to a customer, select an invoice, and tap on the camera icon to take photos. You can also select photos from your gallery.'
    },
    {
      question: 'What should I do if the app crashes?',
      answer: 'First, try restarting the app. If the issue persists, check for app updates. If problems continue, contact support with details about when the crash occurs.'
    },
    {
      question: 'How do I update customer information?',
      answer: 'Customer information is managed by the admin system. Please contact your supervisor to request changes to customer details.'
    },
    {
      question: 'Can I use the app offline?',
      answer: 'Yes, the app has offline capabilities. Your data will sync when you reconnect to the internet.'
    },
    {
      question: 'How do I reset my password?',
      answer: 'Go to Settings > Change Password. You\'ll need to enter your current password and then set a new one.'
    }
  ];

  const contactOptions = [
    {
      title: 'Email Support',
      icon: 'email',
      action: () => Linking.openURL('mailto:support@seabizmarking.com')
    },
    {
      title: 'Call Support',
      icon: 'phone',
      action: () => Linking.openURL('tel:+18001234567')
    },
    {
      title: 'Live Chat',
      icon: 'chat',
      action: () => alert('Live chat would open here')
    },
    {
      title: 'Knowledge Base',
      icon: 'menu-book',
      action: () => Linking.openURL('https://support.seabizmarking.com')
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="help" size={50} color="#4CAF50" />
        <Text style={styles.headerTitle}>Help & Support</Text>
        <Text style={styles.headerSubtitle}>
          Find answers to common questions or contact our support team
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
        {faqs.map((faq, index) => (
          <View key={index} style={styles.faqItem}>
            <Text style={styles.question}>{faq.question}</Text>
            <Text style={styles.answer}>{faq.answer}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Support</Text>
        <View style={styles.contactGrid}>
          {contactOptions.map((option, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.contactOption}
              onPress={option.action}
            >
              <View style={styles.contactIconContainer}>
                <MaterialIcons name={option.icon} size={30} color="#4CAF50" />
              </View>
              <Text style={styles.contactTitle}>{option.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.supportHours}>
        <Text style={styles.supportHoursTitle}>Support Hours</Text>
        <Text style={styles.supportHoursText}>
          Monday - Friday: 8:00 AM - 8:00 PM EST
        </Text>
        <Text style={styles.supportHoursText}>
          Saturday: 9:00 AM - 5:00 PM EST
        </Text>
        <Text style={styles.supportHoursText}>
          Sunday: Closed
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
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 15,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
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
  faqItem: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  question: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
  },
  answer: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  contactGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  contactOption: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#eee',
  },
  contactIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e8f5e9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  supportHours: {
    backgroundColor: 'white',
    marginTop: 15,
    marginBottom: 20,
    padding: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  supportHoursTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  supportHoursText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
}); 