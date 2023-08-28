import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AI from './src/components/AI';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sentimental Analysis </Text>
      <AI/>
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