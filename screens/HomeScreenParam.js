import { View, Text,Button } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {

  return (
    <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>HomeScreen</Text>
      {/* <Text>Initial param : itemId - {itemId}{'\n'}</Text>
            <Button
             title='Update param'
             onPress={()=>navigation.setParams({
              itemId: Math.floor(Math.random()*100)
             })}/> */}
      <Text>{'\n'}</Text>
            <Button
             title='Go to Detail'
             onPress={()=>{
              //1.Navigate to the Details mroute with params
              navigation.navigate('Details',{
                itemId : 1088 ,
                otherParam: 'React Native App'
              })
            }}
            />
    </View>
  )
}

export default HomeScreen