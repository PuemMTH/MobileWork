import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import SentimentalAnalysis from "./src/components/SentimentalAnalysis";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import MainPages from "./src/screens/MainPages";
import AboutPages from "./src/screens/AboutPages";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainPages"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen 
          name="MainPages" 
          component={MainPages} 
        />
        <Stack.Screen
          name="AboutPages"
          component={AboutPages}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}