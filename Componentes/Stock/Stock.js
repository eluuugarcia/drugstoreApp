// import liraries
import React, { Component } from "react";
import { View, Button, Text, StyleSheet } from "react-native";

// create a component
class Stock extends Component {
  render() {
    const { navigation } = this.props;
    return <View style={styles.container} />;
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
export default Stock;
