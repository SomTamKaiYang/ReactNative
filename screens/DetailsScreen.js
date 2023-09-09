import { View, Text,Button } from 'react-native'
import React from 'react'



const DetailsScreen = ({navigation}) => {
  return (
    <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>Details Screen</Text>
            <Button
             title='Go to Detail...again'
             onPress={()=>navigation.push('Details')}
            />
            <Button
             title='Go TO HOME'
             onPress={()=>navigation.navigate('Home')}
            />
            <Button
             title='Go BACK'
             onPress={()=>navigation.goBack('Details')}
            />
    </View>
  )
}

export default DetailsScreen