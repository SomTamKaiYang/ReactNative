import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import TouchableExample from './components/TouchableExample'
import TouchablePractice from './components/TouchablePractice'

const App = () => {
  return (
    <View style={{flex:1}}>
      <TouchablePractice/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})