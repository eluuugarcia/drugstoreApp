// import liraries
import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { Header, Title, Right, Body } from "native-base";

import Carrito from "./Carrito/Carrito";
import { goToSearchProducts } from "../../Redux/Actions/actionCarrito";
import ModalAddProduct from "./Carrito/ModalAddProduct";
import ModalEditItemCart from "./Carrito/ModalEditItemCart";
import Options from "./Venta/Options";
import { Badge } from "react-native-elements";

// create a component
class Venta extends Component {
  state = {
    cartVisible: false
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <Header noLeft style={{ backgroundColor: "#35377c" }}>
          <Body style={{ paddingVertical: 160 }}>
            <Title style={{ fontWeight: "bold" }}>Nueva Venta</Title>
          </Body>
          <Right style={{ marginTop: 6 }}>
            <TouchableOpacity onPress={() => this.props.openCart()}>
              <View style={{ flexDirection: "row", paddingHorizontal: 4 }}>
                <MaterialCommunityIcons
                  active
                  name="cart"
                  color="white"
                  size={32}
                />
                <Badge
                  containerStyle={{
                    position: "absolute",
                    top: -8,
                    right: -6
                  }}
                  value={this.props.cartProducts.length}
                  badgeStyle={{
                    paddingVertical: 10,
                    paddingHorizontal: 2,
                    borderColor: "rgba(0, 0, 0, 0)"
                  }}
                  status="primary"
                  textStyle={{ fontWeight: "700", fontSize: 14 }}
                />
              </View>
            </TouchableOpacity>
          </Right>
        </Header>
        <Options
          buscarProductos={() => navigation.navigate("BuscarProductos")}
          escanearProductos={() => navigation.navigate("LeerProductos")}
        />
        <Carrito
          goToSearchProducts={() =>
            this.props.goToSearchProducts(this.props.navigation)
          }
        />
        <ModalAddProduct />
        <ModalEditItemCart />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
    paddingVertical: 50,
    paddingHorizontal: 20,
    alignContent: "flex-end",
    justifyContent: "space-around"
  },
  searchButton: {
    width: 250,
    backgroundColor: "#1da1f2",
    marginRight: 40
  },
  searchView: {
    flex: 1,
    top: 0,
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "space-between"
  },
  scanCode: {
    flex: 0.7,
    alignItems: "center"
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
  }
});

// make this component available to the app
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Venta);
