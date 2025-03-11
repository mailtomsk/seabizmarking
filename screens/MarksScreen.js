import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function MarksScreen() {
  // Sample data for marks/performance
  const performanceData = [
    { category: 'Fuel Efficiency', score: 92, grade: 'A' },
    { category: 'On-Time Delivery', score: 88, grade: 'B+' },
    { category: 'Safety Rating', score: 95, grade: 'A+' },
    { category: 'Vehicle Maintenance', score: 90, grade: 'A-' },
    { category: 'Customer Feedback', score: 85, grade: 'B' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerCard}>
        <Text style={styles.headerTitle}>Performance Overview</Text>
        <Text style={styles.headerScore}>90</Text>
        <Text style={styles.headerGrade}>A-</Text>
        <Text style={styles.headerSubtext}>Overall Performance Score</Text>
      </View>

      {performanceData.map((item, index) => (
        <View key={index} style={styles.scoreCard}>
          <View style={styles.scoreInfo}>
            <Text style={styles.categoryText}>{item.category}</Text>
            <Text style={styles.gradeText}>{item.grade}</Text>
          </View>
          <View style={styles.progressContainer}>
            <View style={[styles.progressBar, { width: `${item.score}%` }]} />
          </View>
          <Text style={styles.scoreText}>{item.score}/100</Text>
        </View>
      ))}

      <View style={styles.feedbackCard}>
        <Text style={styles.feedbackTitle}>Recent Feedback</Text>
        <View style={styles.feedbackItem}>
          <Text style={styles.feedbackDate}>Nov 15, 2023</Text>
          <Text style={styles.feedbackText}>
            "Driver was very professional and arrived on time. Vehicle was clean and well-maintained."
          </Text>
          <Text style={styles.feedbackSource}>- Route Supervisor</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 15,
  },
  headerCard: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  headerScore: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
  headerGrade: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  headerSubtext: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  scoreCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  scoreInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  gradeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  progressContainer: {
    height: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginBottom: 5,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  scoreText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'right',
  },
  feedbackCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginTop: 5,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  feedbackTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  feedbackItem: {
    marginBottom: 10,
  },
  feedbackDate: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  feedbackText: {
    fontSize: 16,
    color: '#333',
    fontStyle: 'italic',
    marginBottom: 5,
    lineHeight: 22,
  },
  feedbackSource: {
    fontSize: 14,
    color: '#666',
    textAlign: 'right',
  },
}); 