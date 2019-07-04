// import liraries
import React, { Component } from 'react';
import {
  View, Button, Text, StyleSheet, Alert,
} from 'react-native';
import Constants from 'expo-constants';
//import * as Permissions from 'expo-permissions';
import {Permissions } from 'expo';
import { BarCodeScanner } from 'expo-barcode-scanner';

// create a component
class LeerProductos extends Component {
  static navigationOptions = {
    title: '',
    headerStyle: {
      backgroundColor: 'rgba(255,255,255,0)',
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  state = {
    hasCameraPermission: null,
    scanned: false,
  };
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
  const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Buscando permisos de cámara</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No se tiene acceso a la cámara</Text>;
    }
    return (
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && (
          <Button title={'Escanear de nuevo'} onPress={() => this.setState({ scanned: false })} />
        )}
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    Alert.alert("Código de barra escaneado!",
    `Tipo: ${type}\nDatos: ${data}` ), [{text: 'Aceptar'}]
    //alert(`Código de barra: ${type} and data ${data} has been scanned!`);
  };




}


// make this component available to the app
export default LeerProductos;
