import { Stylesheet, View, Text, Image } from "react-native";
import React from "react";

const DisplayandImage = () => {
  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <Image
        style={{ width: 50, height: 50 }}
        source={require("../assets/react_logo.png")}
      />
      <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
    </View>
  );
};

export default DisplayandImage;


