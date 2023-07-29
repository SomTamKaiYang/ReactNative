import { StyleSheet, Text, View } from "react-native";
import Recap from "./components/Recap";


export default function App() {
  return (
    <View style={{flex: 1,alignItems: "center"}}>
      <Recap/>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
