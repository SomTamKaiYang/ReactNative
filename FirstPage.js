import { View, Text,Button,StyleSheet } from 'react-native'
import React from 'react'



const FirstPage = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.textStyle}>This is FirstPage of the app</Text>
            <Button
             title='GO TO SECOND PAGE'
             onPress={()=>navigation.navigate('SecondDrawer')}
            />
    </View>
  )
}

export default FirstPage

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    },
    textStyle: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 16
    },
    });