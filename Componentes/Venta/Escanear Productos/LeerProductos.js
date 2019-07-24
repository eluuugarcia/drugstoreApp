// import liraries
import React, { Component } from "react";
import { View, Button, Text, StyleSheet, Alert } from "react-native";
import Constants from "expo-constants";
// import * as Permissions from "expo-permissions";
import { Permissions } from "expo";
import { BarCodeScanner } from "expo-barcode-scanner";
import PermisosCamara from "./PermisosCamara";
import PermissionsDenied from "./PermissionsDenied";
import { searchBarcode } from "../../../Redux/Actions/actionCarrito";
import { connect } from "react-redux";

// create a component
class LeerProductos extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    hasCameraPermission: null,
    scanned: false
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  }

  render() {
    const askPermissions = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({ hasCameraPermission: status === "granted" });
    };

    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <PermisosCamara darPermiso={() => askPermissions()} />;
    }
    if (hasCameraPermission === false) {
      return <PermissionsDenied />;
    }
    return (
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && (
          <Button
            title={"Escanear de nuevo"}
            onPress={() => this.setState({ scanned: false })}
          />
        )}
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    this.props.searchBarcode(data, this.props.productos);
    // Alert.alert("Código de barra escaneado!", `Tipo: ${type}\nDatos: ${data}`),
    //   [{ text: "Aceptar" }];
    //alert(`Código de barra: ${type} and data ${data} has been scanned!`);
  };
}

function mapStateToProps(state) {
  return {
    productos: state.reducerProductos.productos
  };
}

const mapDispatchToProps = dispatch => ({
  searchBarcode: (code, products) => {
    dispatch(searchBarcode(code, products));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeerProductos);
