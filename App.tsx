import React, { useState } from 'react';
import { SafeAreaView, View, Button, Text, StyleSheet } from 'react-native';
import CallAPI from './screens/components/CallAPI';

export default function App() {
  const [showAPI, setShowAPI] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lab 5: API Call</Text>
      <Button
        title={showAPI ? "Hide API Data" : "Show API Data"}
        onPress={() => setShowAPI(prev => !prev)}
      />
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
  },
});
