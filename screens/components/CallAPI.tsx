import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function CallAPI() {
  const [data, setData] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData: Post = await response.json();
        setData(jsonData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#00796b" />;
  }

  if (error) {
    return <Text style={styles.error}>Error: {error}</Text>;
  }

  return (
    <View style={styles.dataContainer}>
      <Text style={styles.text}>Title: {data?.title}</Text>
      <Text style={styles.text}>Body: {data?.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dataContainer: {
    marginTop: 20,
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#b2dfdb',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
    width: '100%',
  },
  text: {
    fontSize: 18,
    color: '#424242',
    marginBottom: 10,
  },
  error: {
    fontSize: 18,
    color: '#d32f2f',
  },
});
