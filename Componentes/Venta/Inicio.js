// import liraries
import React, { Component } from "react";

import { connect } from "react-redux";

import Carrito from "./Carrito/Carrito";
import { goToSearchProducts } from "../../Redux/Actions/actionCarrito";
import ModalAddProduct from "./Carrito/ModalAddProduct";
import ModalEditItemCart from "./Carrito/ModalEditItemCart";
import ModalChooseClient from "./Buscar Clientes/ModalChooseClient";
import ModalBarCodeNotFound from "./Escanear Productos/ModalBarCodeNotFound";

import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground
} from "react-native";
import SelectMayMin from "./Select-May-Min";
const { width, height } = Dimensions.get("screen");

// create a component
class Inicio extends Component {
  state = {
    cartVisible: false
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={require("../../assets/bg.png")}
            style={styles.backgroundImage}
          />
          <View style={{ flex: 1, marginHorizontal: 20 }}>
            <View style={styles.container}>
              <View style={styles.circle} />
            </View>
            <View style={styles.topView}>
              <Text style={styles.nuevaVentaText}>Nueva Venta</Text>
              <Text style={styles.tipoVenta}>Tipo de venta:</Text>
            </View>
          </View>
        </View>

        <SelectMayMin
          ventaMayorista={() => {
            this.props.ventaMayorista();
            navigation.navigate("VentaMayorista");
          }}
          ventaMinorista={() => {
            this.props.ventaMinorista();
            navigation.navigate("Venta");
          }}
        />

        <Carrito
          goToSearchProducts={() =>
            this.props.goToSearchProducts(this.props.navigation)
          }
        />
        <ModalAddProduct />
        <ModalEditItemCart />
        <ModalChooseClient continuar={() => navigation.navigate("Venta")} />
        <ModalBarCodeNotFound />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.8
  },
  container: {
    flex: 0.2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 50,
    alignItems: "center"
  },
  circle: {
    backgroundColor: "white",
    borderRadius: 100,
    paddingHorizontal: 60,
    paddingVertical: 60
  },
  topView: {
    flex: 0.8,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  nuevaVentaText: {
    fontSize: 40,
    fontWeight: "400",
    textShadowColor: "rgba(0, 0, 0, .6)",
    textShadowOffset: {
      width: 1,
      height: 1
    },
    textShadowRadius: 2
  },
  tipoVenta: {
    fontSize: 16,
    color: "#323232",
    fontWeight: "100",
    fontStyle: "italic"
  }
});

function mapStateToProps(state) {
  return {
    productos: state.reducerProductos.productos,
    cartProducts: state.reducerCarrito.cart
  };
}
const mapDispatchToProps = dispatch => ({
  getProductos: () => {
    dispatch({ type: "GET_PRODUCTOS" });
  },
  openCart: () => {
    dispatch({ type: "OPEN_CART" });
  },
  closeCart: () => {
    dispatch({ type: "CLOSE_CART" });
  },
  goToSearchProducts: navigation => {
    dispatch(goToSearchProducts(navigation));
  },
  ventaMayorista: () => {
    dispatch({ type: "CHOOSE_MAYORISTA" });
  },
  ventaMinorista: () => {
    dispatch({ type: "CHOOSE_MINORISTA" });
  }
});

// make this component available to the app
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inicio);
