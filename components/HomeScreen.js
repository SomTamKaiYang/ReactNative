import { View, Text,Button } from 'react-native'
import React from 'react'
import DetailScreen from './DetailScreen'


const HomeScreen = ({navigation}) => {
  return (
    <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>HomeScreen</Text>
            <Button
             title='Go to Detail'
             onPress={()=>navigation.navigate('Details')}
            />
    </View>
  )
}

export default HomeScreen