// import liraries
import React, { Component } from "react";
import { View, Button, Text, StyleSheet } from "react-native";

// create a component
class Estadisticas extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Estadisticass</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7f7"
  }
});

// make this component available to the app
export default Estadisticas;
