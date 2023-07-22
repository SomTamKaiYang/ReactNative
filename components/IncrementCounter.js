import { View, Text, Button } from "react-native";
import React, { useState } from "react";

const IncrementCounter = () => {
  const [age, setAge] = useState(23);

  const increment = () => {
    setAge((a) => a + 1);
  };

  return (
    <View>
      <Text style={{ fontsize: 24, fontstyle: "bold" }}>
            Your age: {age}</Text>
      <Text>{'\n\n '}</Text>
      <Button title="+3" onPress={() => {
          setAge(age + 3);
        }}/>
      <Text>{'\n\n'}</Text>
      <Button title="+1" onPress={() => {
          increment(age);
        }}/>

    </View>
  );
};

export default IncrementCounter;
