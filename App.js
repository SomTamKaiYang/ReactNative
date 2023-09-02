import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './components/HomeScreen'
import DetailScreen from './components/DetailScreen'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeScreen} options={{title: 'Overview'}}/>
            <Stack.Screen name='Details' component={DetailScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
