// import liraries
import React, { Component } from 'react';
import {
  View, Button, Text, StyleSheet,
} from 'react-native';

// create a component
class CargarProductos extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>CargarProductos</Text>
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
    backgroundColor: '#4699',
  },
});

// make this component available to the app
export default CargarProductos;
