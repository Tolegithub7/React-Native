import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RootLayout = () => {
  return (
    <View>
      <Text style={styles.container}>RootLayout</Text>
    </View>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "blue",
    fontWeight: "bold",
    fontSize: "30px",
  },
});
