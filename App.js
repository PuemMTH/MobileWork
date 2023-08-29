import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import SentimentalAnalysis from './src/components/SentimentalAnalysis';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sentimental Analysis </Text>
      <SentimentalAnalysis/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3DFFD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    margin: 10,
    fontWeight: "bold",
  
},
});