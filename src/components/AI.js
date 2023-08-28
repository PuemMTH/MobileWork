import React, { useState, useEffect } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  View,
  Image,
} from "react-native";

import axios from "axios";

const AI = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  // const emoji = () => {
  //   if (data.label === "pos") {
  //     return <Image source={require('../images/happy.png')} style={{ width: '100%'}} />;
  //   } else if (data.label === "neg") {
  //     return <Image source={require('../images/Sad.png')} style={{ width: '100%'}} />;
  //   } else if (data.label === "neu") {
  //     return <Image source={require('../images/ANGRY.png')} style={{ width: '100%'}} />;
  //   } else {
  //     return <Image source={require('../images/477848.jpg')} style={{ width: '100%'}} />;
  //   }
  // };

  const SenAnalysis = async () => {
    const apiKey = "hNRzg4CoMzoXlXCvo6wvWOnOo01W1Xs7";
    const options = {
      method: "POST",
      url: `https://api.iapp.co.th/sentimental-analysis/predict?text=${encodeURIComponent(
        text
      )}`,
      headers: {
        apikey: apiKey,
      },
    };

    if (text.length > 8) {
      await axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          setData(response.data);
        })
        .catch(function (error) {
          Alert.alert("เกิดข้อผิดพลาด");
        });
    } else {
      Alert.alert("กรุณากรอกข้อความมากกว่า 8 ตัวอักษร");
    }
  };

  return (
    <View style={styles.title}>
      <TextInput
        placeholder="Please Input Text..."
        onChangeText={(text) => setText(text)}
        defaultValue={text}
        style={styles.input}
        value={text}
        numberOfLines={2}
        multiline={true}
      />

      <Text>{data.sentiment}</Text>

      {/* <Button title="Submit" onPress={SenAnalysis} color=}/>  */}
      <TouchableOpacity onPress={SenAnalysis} style={styles.touch}>
        <Text
          style={{
            fontSize: 20,
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          SUBMIT
        </Text>
      </TouchableOpacity>
      <View>
        {data ? (
          <>
            <Image
              source={
                data.label === "pos"
                  ? require("../images/happy.png")
                  : data.label === "neg"
                  ? require("../images/Sad.png")
                  : data.label === "neu"
                  ? require("../images/ANGRY.png")
                  : require("../images/477848.jpg")
              }
              style={{
                width: 150,
                height: 200,
                alignSelf: "center",
                resizeMode: "contain",
                marginTop: 10,
              }}
            />
          </>
        ) : (
          <Text style={styles.info}>No Data</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
  infoContainer: {
    backgroundColor: "#f2d399",
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderColor: "#0d4c73",
    borderWidth: 1,
  },
  info: {
    fontSize: 30,
    alignSelf: "center",
  },
  input: {
    margin: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fff",
    borderRadius: 6,
    textAlign: "center",
    fontSize: 18,
  },
  touch: {
    backgroundColor: "#9376E0",
    textAlign: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#fff",
    padding: 10,
    marginBottom: 20,
    marginTop: 1,
    borderRadius: 8,
  },
});

export default AI;
