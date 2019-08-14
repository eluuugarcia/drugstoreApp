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
            marginHorizontal: 70,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            marginVertical: 40
          }}
        >
          <AddProductForm tipoProductos={this.props.tipoProductos} />
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
      console.log("hfisjdfhs");
      dispatch({ type: "GET_TIPOS_PRODUCTOS" });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CargarProductos);
