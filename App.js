import "react-native-gesture-handler";
import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function FirstScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#7fffd4",
        },
        headerTintColor: "#008080",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="FirstPage" component={FirstPage} />
    </Stack.Navigator>
  );
}

function SecondScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#7fffd4",
        },
        headerTintColor: "#008080",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="SecondPage" component={SecondPage} />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#e6e6ff",
          width: 240,
        },
      }}
    >
      <Drawer.Screen
        name="FirstDrawer"
        component={FirstScreenStack}
        options={{ drawerLabel: "First Page Option" }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="SecondDrawer"
        component={SecondScreenStack}
        options={{ drawerLabel: "Second Page Option" }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;
