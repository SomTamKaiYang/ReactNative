import { View, Text } from "react-native";
import React from "react";

const Fullname = ({ fname1, lname1 }) => {
  return (
    <View>
      <Text>
        <Text>
          {" "}
          Your First Name is {fname1} and Last Name is {lname1}
        </Text>
      </Text>
    </View>
  );
};

const Customtext = () => {
  return (
    <View style={{ alignItems: "center", top: 350 }}>
      <Fullname fname1="Natthaphum" lname1="Kongsatjaviwat" />
      <Fullname fname1="Boonyasith" lname1="Sawangroj" />
    </View>
  );
};

export default Customtext;
