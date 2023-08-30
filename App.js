import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import SentimentalAnalysis from './src/components/SentimentalAnalysis';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sentimental Analysis </Text>
      <Text style={styles.subtitle}>AI วิเคราะห์ความรู้สึกและอารมณ์จากข้อความ</Text>
      <Text style={styles.subtitle}>😀 HAPPY   😡 ANGRY   😢 SAD</Text>
      <SentimentalAnalysis/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1CECF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    margin: 10,
    fontWeight: "bold",
    color : "#BF4741",
},
  subtitle : {
    fontSize: 15,
    margin: 5,
    color : "#000",
},
text: {
  fontFamily: 'Roboto',
},
});