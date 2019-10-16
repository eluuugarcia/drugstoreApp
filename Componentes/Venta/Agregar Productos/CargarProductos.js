// import liraries
import React, { Component } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import ValidateCode from "./ValidateCode";
import TopBar from "../../GlobalUtils/TopBar";
// create a component
class CargarProductos extends Component {
  static navigationOptions = {
    title: "",
    header: null
  };

  // validateBarcode = ({ barcode }) => {
  //   this.props.validarCodigo(barcode);
  // };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <TopBar
          title="Agregar producto"
          goBack={() => navigation.goBack()}
        ></TopBar>

        <View
          style={{
            flex: 1,

            marginVertical: 40
          }}
        >
          <ValidateCode
            // validateBarcode={(code) => this.props.validarCodigo(code)}
            continue={(code) => {
              this.props.setLoading();
              navigation.navigate("NuevoProducto", { barcode: code });
            }}
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

const mapDispatchToProps = (dispatch) => {
  return {
    validarCodigo: (barcode) => {
      dispatch({ type: "VALIDATE_BARCODE", barcode });
    },
    setLoading: () => {
      dispatch({ type: "SET_LOADING" });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CargarProductos);
