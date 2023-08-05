import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../components/styles'

const DefineStyle = () => {
  return (
    <View style = {styles.container}>
      <Text style={[styles.title,styles.warning]}>Hello World</Text>
    </View>
  )
}

export default DefineStyle

/* const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    title:{
        fontSize:60,
        fontWeight:'bold',
    },
    warning:{
        color:'red'
    },
}) */