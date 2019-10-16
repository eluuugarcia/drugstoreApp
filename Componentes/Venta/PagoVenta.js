import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import PagoOption from "./PagoOption";
import TopBar from "../GlobalUtils/TopBar";
import PagoModal from "./PagoModal";
import CONSTANTES from "../GlobalUtils/CONSTANTES";
import APIVentas from "../../HttpRequests/APIVentas";

class PagoVenta extends Component {
  state = {
    medioPago: null,
    showModal: false
  };

  componentDidUpdate = () => {
    const { navigation } = this.props;
    if (this.props.goToInicio) {
      navigation.navigate("Inicio");
      this.props.unsetGoToInicio();
    }
  };

  render() {
    const { navigation } = this.props;

    this.selectOption = async (medioPago) => {
      this.setState({ medioPago });
      if (this.props.mayorista) {
        this.setState({ showModal: true });
      } else {
        const json = {
          idMedioPago: medioPago.id,
          detalle: this.props.cartProducts,
          montoTotal: this.props.montoTotal,
          idClienteDeSucursal: null
        };
        const response = await APIVentas.ventaMinorista(json, this.props.token);
        if (response) {
          this.props.showAnimation();
          setTimeout(() => {
            this.props.hideAnimation();
            this.props.cleanCart();
            navigation.navigate("Inicio");
          }, 900);
        } else {
          this.props.setError();
        }
      }
    };

    this.ventaMayorista = async (montoEntregado) => {
      const json = {
        idMedioPago: this.state.medioPago.id,
        detalle: this.props.cartProducts,
        montoTotal: this.props.montoTotal,
        idClienteDeSucursal: this.props.chooseClient.idClienteDeSucursal,
        montoEntregado
      };
      const response = await APIVentas.ventaMayorista(json, this.props.token);
      this.setState({ showModal: false });
      if (response) {
        this.props.showAnimation();
        setTimeout(() => {
          this.props.hideAnimation();
          this.props.cleanCart();
          navigation.navigate("Inicio");
        }, 900);
      } else {
        this.props.setError();
      }
    };

    return (
      <View style={{ flex: 1 }}>
        <TopBar
          title="Confirmar Venta"
          goBack={() => navigation.goBack()}
        ></TopBar>

        <PagoModal
          show={this.state.showModal}
          hide={() => this.setState({ showModal: false })}
          total={this.props.montoTotal}
          medioPago={this.state.medioPago}
          confirmarVenta={(monto) => this.ventaMayorista(monto)}
        ></PagoModal>

        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Elige un medio de pago:</Text>
          </View>
          <View style={styles.optionsContainer}>
            <TouchableOpacity>
              <PagoOption
                onPress={() => this.selectOption({ id: 1, nombre: "Efectivo" })}
                option="EFECTIVO"
                image="https://cdn4.iconfinder.com/data/icons/basic-20/32/Basic-iconfinder-23-512.png"
                color1="rgba(116, 185, 79, 0.8)"
                color2="rgba(102, 168, 83, 0.8)"
                imageStyle={{
                  height: 75,
                  width: 75,
                  marginVertical: 10,
                  marginLeft: 15
                }}
              ></PagoOption>
            </TouchableOpacity>
            <PagoOption
              option="DÉBITO"
              image="https://cdn3.iconfinder.com/data/icons/cash-card-starters-glyph/48/Sed-08-512.png"
              color1="rgba(217, 91, 67, 0.8)"
              color2="rgba(192, 41, 66, 0.8)"
              onPress={() => this.selectOption({ id: 2, nombre: "Débito" })}
            ></PagoOption>
            <PagoOption
              option="CRÉDITO"
              image="https://cdn4.iconfinder.com/data/icons/color-flat/4/24-512.png"
              color1="rgba(21, 112, 166, 0.8)"
              color2="rgba(18, 94, 140, 0.8)"
              onPress={() => this.selectOption({ id: 3, nombre: "Crédito" })}
            ></PagoOption>
            {this.props.mayorista ? (
              <PagoOption
                option="CUENTA CORRIENTE"
                image="https://cdn4.iconfinder.com/data/icons/business-management-74/64/Client_management-512.png"
                color1="rgba(218, 170, 0, 0.7)"
                color2="rgba(198, 146, 20, 0.7)"
                imageStyle={{
                  height: 80,
                  width: 80,
                  marginVertical: 10,
                  opacity: 0.7,
                  marginLeft: 5
                }}
                onPress={() =>
                  this.selectOption({ id: 4, nombre: "Cuenta corriente" })
                }
              ></PagoOption>
            ) : null}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "600",
    // fontFamily: '',
    textShadowColor: "rgba(0, 0, 0, .6)",
    textShadowOffset: {
      width: 0.5,
      height: 0.5
    },
    textShadowRadius: 1
  },
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    paddingHorizontal: 30,
    marginVertical: 10
  },
  textContainer: {
    flex: 1,
    justifyContent: "center"
  },
  optionsContainer: {
    justifyContent: "space-evenly",
    flex: 8
  }
});

function mapStateToProps(state) {
  return {
    mayorista: state.reducerVenta.mayorista,
    cartProducts: state.reducerCarrito.cart,
    montoTotal: state.reducerCarrito.totalCart,
    token: state.reducerSession.token,
    goToInicio: state.reducerErrors.goToInicio,
    chooseClient: state.reducerVenta.chooseClient
  };
}

const animation = CONSTANTES.confirmVenta;
const textError =
  "No se pudo realizar la venta, comuniquese con el administrador.";
const titleError = "Oops! Ocurrió un error";
const error = {
  textError,
  titleError,
  showCancelar: false,
  goToInicio: true
};

const mapDispatchToProps = (dispatch) => ({
  openCart: () => {
    dispatch({ type: "OPEN_CART" });
  },
  showAnimation: () => {
    dispatch({
      type: "SHOW_ANIMATION",
      animation,
      colorAnimation: "rgba(75, 149, 96, 1)",
      textAnimation: "Venta realizada correctamente"
    });
  },

  hideAnimation: () => {
    dispatch({ type: "HIDE_ANIMATION" });
  },
  cleanCart: () => {
    dispatch({ type: "CLEAN_CART" });
  },
  setError: () => {
    dispatch({ type: "SET_ERROR", error });
  },
  unsetGoToInicio: () => {
    dispatch({ type: "UNSET_GO_TO_INICIO" });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PagoVenta);
