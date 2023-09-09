import { View, Text,Button } from 'react-native'
import React from 'react'



const DetailsScreen = ({route,navigation}) => {

  // 2. Get the param
  const {itemId,otherParam} = route.params;

  return (
    <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>Details Screen</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>


            <Text>{'\n'}</Text>
            <Button
             title='Go to Detail...again'
             onPress={()=>
              navigation.push('Details',{
                itemId : Math.floor(Math.random()*100),
                otherParam: 'Bruhhhhh'})}
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