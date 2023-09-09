import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#ffd700" },
          headerTintColor: "#ff1493",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="First"
          component={FirstPage}
          options={{ title: "FirstPage" }}
        />
        <Stack.Screen
          name="Second"
          component={SecondPage}
          options={{ title: "SecondPage" }}
        />
        <Stack.Screen
          name="Third"
          component={ThirdPage}
          options={{ title: "ThirdPage" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
