import { View, Image, TouchableOpacity, Text } from "react-native";
import VentaMinoristaOption from "./VentaMinoristaOption";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Badge } from "react-native-elements";
import { connect } from "react-redux";
import { Appbar } from "react-native-paper";

import React, { Component } from "react";

class Venta extends Component {
  componentDidMount = () => {
    this.props.cleanCart();
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
          <Appbar.Content
            title={
              this.props.ventaMayorista ? "Venta Mayorista" : "Venta Minorista"
            }
            subtitle={
              this.props.ventaMayorista
                ? this.props.chooseClient.cliente.razonSocial
                : null
            }
          />
          <View style={{ marginRight: 10 }}>
            <MaterialCommunityIcons
              active
              name="cart"
              color="white"
              size={32}
              onPress={() => {
                this.props.openCart();
              }}
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
                borderColor: "rgba(0, 0, 0, 0)",
                backgroundColor: "#C51162"
              }}
              status="primary"
              textStyle={{ fontWeight: "700", fontSize: 14 }}
            />
          </View>
        </Appbar.Header>

        <View
          style={{
            flex: 1,
            justifyContent: "space-evenly",
            paddingVertical: 20,
            backgroundColor: "#EFE7E7"
          }}
        >
          <View style={{ flex: 1 }}>
            <VentaMinoristaOption
              navigate={() => navigation.navigate("BuscarProductos")}
              text="Buscar"
              image={
                <Image
                  style={{ width: 120, height: 120 }}
                  source={require("../../../assets/icons8-google-web-search-100-2.png")}
                />
              }
            />
          </View>

          <View style={{ flex: 1 }}>
            <VentaMinoristaOption
              navigate={() => navigation.navigate("LeerProductos")}
              text="Escanear"
              image={
                <Image
                  style={{ width: 120, height: 120 }}
                  source={require("../../../assets/icons8-cÃ³digo-de-barras-100-4.png")}
                />
              }
            />
          </View>

          <View style={{ flex: 1 }}>
            <VentaMinoristaOption
              navigate={() => navigation.navigate("CargarProductos")}
              text="Agregar"
              image={
                <Image
                  style={{ width: 120, height: 120 }}
                  source={require("../../../assets/icons8-mÃ¡s-2-matemÃ¡ticas-100.png")}
                />
              }
            />
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    productos: state.reducerProductos.productos,
    cartProducts: state.reducerCarrito.cart,
    ventaMayorista: state.reducerVenta.mayorista,
    chooseClient: state.reducerVenta.chooseClient
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
  removeTypeOfSale: () => {
    dispatch({ type: "REMOVE_TYPE_OF_SALE" });
  },
  cleanCart: () => {
    dispatch({ type: "CLEAN_CART" });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Venta);
