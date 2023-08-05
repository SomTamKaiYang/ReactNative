import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState } from "react";

const Recap = () => {
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");

  const alertt = () => {
    alert("Email: " + Email + "\nPassword: " + Pass);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email "
        style={styles.input}
        value={Email}
        onChangeText={(value) => {
          setEmail(value);
        }}
      />
      <TextInput
        placeholder="Password "
        style={styles.input}
        value={Pass}
        onChangeText={(value) => {
          setPass(value);
        }}
      />
      <Text>{"\n"}</Text>
      <Button
        style={[styles.submitButton, styles.submitButtonText]}
        title="SUBMITT"
        onPress={alertt()}
      />
    </View>
  );
};

export default Recap;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 0.5,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
});
