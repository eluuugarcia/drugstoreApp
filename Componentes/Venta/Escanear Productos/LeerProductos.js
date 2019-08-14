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
import EnfoqueEscaner from "./EnfoqueEscaner";
import { Fab } from "native-base";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { Badge } from "react-native-elements";
import ModalBarCodeNotFound from "./ModalBarCodeNotFound";

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
    const { navigation } = this.props;
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
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          flexDirection: "column"
          // backgroundColor: "rgba(68, 68, 68, 0.6)"
        }}
      >
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={[StyleSheet.absoluteFill, styles.container]}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 15,
              marginVertical: 10
            }}
          >
            <AntDesign
              name="arrowleft"
              size={24}
              color="white"
              style={{ marginHorizontal: 5 }}
              onPress={() => navigation.goBack()}
            />

            <Text
              style={{
                color: "white",
                fontWeight: "400",
                fontSize: 18,
                marginVertical: 10,
                marginHorizontal: 10,

                textShadowColor: "rgba(93, 53, 124, 0.5)",
                textShadowOffset: {
                  width: 2,
                  height: 2
                },

                textShadowRadius: 2
              }}
            >
              Escanear Productos
            </Text>
          </View>

          <EnfoqueEscaner />
          <Fab
            active
            style={{ backgroundColor: "#5d357c" }}
            position="bottomRight"
            onPress={() => {
              this.props.openCart();
            }}
          >
            <View>
              <MaterialCommunityIcons
                active
                name="cart"
                color="white"
                size={30}
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
          </Fab>
        </BarCodeScanner>

        {/* {scanned && (
          <Button
            title={"Escanear de nuevo"}
            onPress={() => this.setState({ scanned: false })}
          />
        )} */}
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    //let data = "7790272001005";
    this.props.searchBarcode(data, this.props.productos);
    this.setState({ scanned: false });
  };
}

function mapStateToProps(state) {
  return {
    productos: state.reducerProductos.productos,
    cartProducts: state.reducerCarrito.cart
  };
}

const mapDispatchToProps = dispatch => ({
  searchBarcode: (code, products) => {
    dispatch(searchBarcode(code, products));
  },
  openCart: () => {
    dispatch({ type: "OPEN_CART" });
  },
  removeBarcodeNotFound: () => {
    dispatch({ type: "UNSET_BARCODE_NOT_FOUND" });
  }
});

const styles = StyleSheet.create({
  container: {}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeerProductos);
