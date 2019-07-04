// import liraries
import React, { Component } from 'react';
import {
  View, Button, Text, StyleSheet,
} from 'react-native';

// create a component
class Tablas extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Y aquí pondria mi tabla... si tuviera una...</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#227844',
  },
});

// make this component available to the app
export default Tablas;
