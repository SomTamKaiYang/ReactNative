import { StyleSheet, Text, View,FlatList,ActivityIndicator } from 'react-native'
import React, {useEffect, useState}from 'react'
import axios from 'axios'

const UseEffectFlatList = () => {

    const [data,setData] = useState([]);
    const [isloading,setIsLoading] = useState(true);

    useEffect(() => {
        //Fetch data from API using axios
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response)=>{
                //Handle Successful response
                setData(response.data);
                setIsLoading(false);
            })
            .catch(()=>{
                //Handle error
                console.error('Error fetching data:',error);
                setIsLoading(false);
            })
      }, [])//The empty dependency array ensures this effect run only once when the component mounts

      if(isloading){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size="large" color="#0000ff"/>
            </View>
        )
      }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts from API using FlatList</Text>
      <FlatList
        data={data}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item})=>(
            <View key={item.id} style={styles.post}>
                <Text style={styles.postTitle}>{item.title}</Text>
                <Text>{item.body}</Text>
            </View>
        )}
      />
    </View>
  )
}

export default UseEffectFlatList

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#f0f0f0",
    },
    title: {
      fontSize: 34,
      fontWeight: "bold",
      marginBottom: 20,
    },
    post: {
      marginBottom: 20,
      padding: 10,
      backgroundColor: "white",
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "#ccc",
    },
    postTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 5,
    },
  });