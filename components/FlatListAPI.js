import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  RefreshControl
} from "react-native";
import React, { useState, useEffect } from "react";

const FlatListAPI = () => {
  const [refreshing, setRefreshing] = useState(true);
  const [datasource, setDatasource] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  //Service to get the datta from the server to render
  const getData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((responseJson) => {
        setDatasource(responseJson);
        setRefreshing(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getItem = (item) => {
    //Function for click on
    alert("id : " + item.id + "Title : " + item.title);
  };

  const ItemView = ({ item }) => {
    return <Text 
                 style = {styles.itemStyle}
                 onPress={()=>getItem(item)}
            >
                {item.title}
           </Text>;
  };

  const ItemSeparatorView = () => {
    return (
      //Flatlist Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };

  const onRefresh = () => {
    //clear old data of the list
    setDatasource([]);
    //call the service to get the last data
    getData();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {refreshing ? <ActivityIndicator /> : null}
        <FlatList
          data={datasource}
          keyExtractor={(index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default FlatListAPI;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    marginTop: 10,
  },
  itemStyle: {
    fontSize: 20,
    padding: 10,
  },
});
