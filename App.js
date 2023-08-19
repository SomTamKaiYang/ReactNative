import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import TouchablePractice from './components/TouchablePractice'
// import Example_useEffect from './components/Example_useEffect'
// import UseEffectFlatList from './components/UseEffectFlatList'
import RandomUserScreen from './components/RandomUserScreen'

const App = () => {
  return (
    <View style={styles.container}>
      {<RandomUserScreen/>}
      {/* {<TouchablePractice/>} */}
      {/* <Example_useEffect/> */}
      {/* {<UseEffectFlatList/>} */}
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