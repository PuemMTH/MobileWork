import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import SentimentalAnalysis from '../components/SentimentalAnalysis'

const MainPages = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sentimental Analysis </Text>
            <Text style={styles.subtitle}>
                AI วิเคราะห์ความรู้สึกและอารมณ์จากข้อความ
            </Text>
            <Text style={styles.subtitle}>😀 Positive 😡 Negative 😐 Neutral</Text>
            <SentimentalAnalysis />
            <Text style={styles.credit}>
                Made with ❤️ by
                <TouchableOpacity
                    onPress={() => navigation.navigate("AboutPages")}
                >
                    <Text
                        style={{
                            color: "#BF4741",
                        }}
                    > @About</Text>
                </TouchableOpacity>
            </Text>
        </View>
    )
}

export default MainPages

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFE5E5",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: 30,
      margin: 10,
      fontWeight: "bold",
      color: "#BF4741",
    },
    subtitle: {
      fontSize: 15,
      margin: 5,
      color: "#000",
    },
    text: {
      fontFamily: "Roboto",
    },
    credit: {
      fontSize: 14,
    }
  });
  