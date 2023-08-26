import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import TouchablePractice from './components/TouchablePractice'
// import Example_useEffect from './components/Example_useEffect'
// import UseEffectFlatList from './components/UseEffectFlatList'
// import RandomUserScreen from './components/RandomUserScreen'
// import FlatList_headerFooter from './components/FlatList_headerFooter'
// import News from './components/News'
// import FlatListAPI from './components/FlatListAPI'
import ProductScreen from './components/ProductScreen'

const App = () => {
  return (
    <View style={{flex:1}}>
      {<ProductScreen/>}
      {/* {<News/>} */}
      {/* {<FlatListAPI/>} */}
      {/* {<FlatList_headerFooter/>} */}
      {/* {<RandomUserScreen/>} */}
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