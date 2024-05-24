import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Tole</Text>
      <Text style={styles.text2}>Funny right</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    fontSize: 40,
    fontWeight: "bold",
    color: "pink",
  },
  text2: {
    color: "red",
    fontSize: 20,
    fontFamily: "Helvetica",
  },
});
