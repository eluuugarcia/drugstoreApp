// import liraries
import React, { Component } from 'react';
import {
  View, Button, Text, StyleSheet,
} from 'react-native';

// create a component
class Graficos extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Graficos =D</Text>
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
    backgroundColor: '#002744',
  },
});

// make this component available to the app
export default Graficos;
