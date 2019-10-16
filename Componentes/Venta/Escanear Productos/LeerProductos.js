// import liraries
import React, { Component } from "react";
import {
  View,
  Button,
  Image,
  StyleSheet,
  Dimensions,
  Text
} from "react-native";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";
import PermisosCamara from "./PermisosCamara";
import PermissionsDenied from "./PermissionsDenied";
import { searchBarcode } from "../../../Redux/Actions/actionCarrito";
import { connect } from "react-redux";
import { Fab } from "native-base";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { Badge } from "react-native-elements";
import ModalBarCodeNotFound from "./ModalBarCodeNotFound";
import THEME from "../../GlobalUtils/THEME";

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
    await this.setState({ hasCameraPermission: status === "granted" });
  }

  render() {
    const { navigation } = this.props;

    const askPermissions = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      await this.setState({ hasCameraPermission: status === "granted" });
    };

    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <PermisosCamara darPermiso={() => askPermissions()} />;
    }
    if (hasCameraPermission === false) {
      return <PermissionsDenied />;
    }

    return (
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={[StyleSheet.absoluteFillObject, styles.barcodeScanner]}
        >
          <View style={styles.goBack}>
            <AntDesign
              name="arrowleft"
              size={24}
              color="white"
              style={{ marginHorizontal: 5 }}
              onPress={() => navigation.goBack()}
            />

            <Text style={styles.text}>Escanear Productos</Text>
          </View>
          <Image
            style={{
              height: 330,
              width: 330
            }}
            source={{
              // uri: "http://cdn.onlinewebfonts.com/svg/img_410303.png"
              uri: "http://cdn.onlinewebfonts.com/svg/img_410303.png"
            }}
          ></Image>

          <Fab
            active
            style={styles.fab}
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
                containerStyle={styles.badgeContainer}
                value={this.props.cartProducts.length}
                badgeStyle={styles.badgeStyle}
                status="primary"
                textStyle={{ fontWeight: "700", fontSize: 14 }}
              />
            </View>
          </Fab>
        </BarCodeScanner>
        {this.state.scanned ? <Text>HOLA</Text> : null}
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    console.log("escaneadooooo");
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

const mapDispatchToProps = (dispatch) => ({
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

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  badgeStyle: {
    paddingVertical: 10,
    paddingHorizontal: 2,
    borderColor: "rgba(0, 0, 0, 0)",
    backgroundColor: "#C51162"
  },
  badgeContainer: {
    position: "absolute",
    top: -8,
    right: -6
  },
  fab: {
    backgroundColor: "#5d357c",
    marginBottom: 8
  },
  text: {
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
  },
  goBack: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    paddingHorizontal: 10,
    paddingVertical: 5,
    top: 0,
    left: 0,
    backgroundColor: THEME.scannerBackgroundColor,
    width: width
    // flex: 19
  },
  container: {
    flexDirection: "column",
    // justifyContent: "center",
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 1)",
    marginBottom: 0

    // alignItems: "center"
  },
  barcodeScanner: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.scannerBackgroundColor,
    flex: 1
    // paddingBottom: 60
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeerProductos);
