import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState } from "react";

const Login = () => {
  const [TextInputName, setTextInputName] = useState("");
  const [TextInputEmail, setTextInputEmail] = useState("");

  const checkTextInput = () => {
    if (!TextInputName.trim()) {
      alert("Please Enter Name");
      return;
    } else if (!TextInputEmail.trim()) {
      alert("Please Enter Email");
      return;
    } else {
      alert("Success");
      return;
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Name "
        style={styles.TextInputStyle}
        value={TextInputName}
        onChangeText={(value) => {
          setTextInputName(value);
        }}
      />
      <TextInput
        placeholder="Enter Email "
        style={styles.TextInputStyle}
        value={TextInputEmail}
        onChangeText={(value) => {
          setTextInputEmail(value);
        }}
      />
      <Text>{"\n"}</Text>
      <Button title="SUBMITT" onPress={() => checkTextInput()} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  TextInputStyle: {
    width: 250,
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
  },
});
