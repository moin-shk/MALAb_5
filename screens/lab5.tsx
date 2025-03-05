import React, { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import CallAPI from './components/CallAPI';

export default function App() {
  const [showAPI, setShowAPI] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lab 5: API Call</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowAPI(prev => !prev)}
      >
        <Text style={styles.buttonText}>
          {showAPI ? "Hide API Data" : "Show API Data"}
        </Text>
      </TouchableOpacity>
      {showAPI && <CallAPI />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00796b',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#00796b',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
