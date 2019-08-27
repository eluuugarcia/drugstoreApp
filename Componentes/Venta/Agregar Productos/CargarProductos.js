// import liraries
import React, { Component } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import AddProductForm from "./addProduct-form.js";
import { connect } from "react-redux";

// create a component
class CargarProductos extends Component {
  static navigationOptions = {
    title: "",
    header: null
  };

  componentDidMount() {
    this.props.cargarTipoProductos();
  }

  validateBarcode = ({ barcode }) => {
    this.props.validarCodigo(barcode);
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Appbar.Header
          statusBarHeight={0}
          style={{ backgroundColor: "#5d357c" }}
        >
          <Appbar.BackAction
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Appbar.Content title="Agregar producto" />
        </Appbar.Header>
        <View
          style={{
            flex: 1,

            marginVertical: 40
          }}
        >
          <AddProductForm
            tipoProductos={this.props.tipoProductos}
            validateBarcode={values => this.validateBarcode(values)}
          />
        </View>
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
    backgroundColor: "#4699"
  }
});

// make this component available to the app
const mapStateToProps = state => {
  return {
    tipoProductos: state.reducerProductos.tipoProductos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    cargarTipoProductos: () => {
      dispatch({ type: "GET_TIPOS_PRODUCTOS" });
    },
    validarCodigo: barcode => {
      dispatch({ type: "VALIDATE_BARCODE", barcode });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CargarProductos);
