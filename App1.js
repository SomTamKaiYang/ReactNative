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


/* import {Text, View,Button } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


function HomeScreen({navigation}){
    return(
        <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>HomeScreen</Text>
            <Button
             title='Go to Detail'
             onPress={()=>navigation.navigate('Details')}
            />
        </View>
    )
}

function DetailsScreen(){
  return(
    <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>Detail Screen</Text>
    </View>
  )
}


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeScreen} options={{title: 'Overview'}}/>
            <Stack.Screen name='Details' component={DetailsScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App */