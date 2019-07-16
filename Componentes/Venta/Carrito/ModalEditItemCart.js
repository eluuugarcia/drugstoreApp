import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import Modal from "react-native-modal";
import CounterButton from "./CounterButton";
import { cancelProductToEdit } from "../../../Redux/Actions/actionCarrito";
import { addProductToCart } from "../../../Redux/Actions/actionVentas";

class ModalEditItemCart extends Component {
  state = {
    counter: null
  };

  setCantidadProducto() {
    const subtotal = this.props.itemToEdit.precio * this.state.counter;
    const cantidad = this.state.counter;
    let productoViejo = { ...this.props.itemToEdit };
    const newProduct = {
      ...productoViejo,
      cantidad,
      subtotal
    };
    // let producto = {
    //   idProductoDeSucursal: 1111,
    //   producto: {
    //     idProducto: 7791070002102,
    //     marca: { idMarca: 1, nombre: "Coca" },
    //     nombre: "Natura 900ml.",
    //     descripcion: null,
    //     idTipo: 1,
    //     idMarca: 1
    //   },
    //   cantidadContiene: null,
    //   cantidadEnStock: 100,
    //   precioVentaMayorista: "43.00",
    //   precioVentaMinorista: "64.00",
    //   activo: true,
    //   urlImagen: null,
    //   idProducto: 7790272001005,
    //   idUnidadMedida: 1,
    //   idSucursal: 1,
    //   cantidad: 3,
    //   subtotal: 3
    // };
    console.log(newProduct);
    this.setState({ counter: 1 });
    this.props.editItemCart(this.props.cart, newProduct);
    this.props.cancelProductToEdit();
  }

  increaseCount = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decreaseCount = () => {
    if (this.state.counter > 1) {
      this.setState({ counter: this.state.counter - 1 });
    } else {
      return;
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.itemToEdit) {
      this.setState({
        counter: nextProps.itemToEdit.cantidad
      });
    }
  }

  render() {
    if (this.props.itemToEdit) {
      return (
        <Modal
          isVisible
          swipeDirection={["up", "down", "right", "left"]}
          animationIn="tada"
          onSwipeComplete={() => {
            this.setState({ counter: 1 });
            this.props.cancelProductToEdit();
          }}
          style={{ borderRadius: 500 }}
        >
          <View style={{ backgroundColor: "#f6f6f6", marginVertical: 150 }}>
            <View style={{ marginVertical: 10, marginHorizontal: 25 }}>
              <View>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: "bold",
                    color: "rgb(130, 130, 130)"
                  }}
                >
                  {this.props.itemToEdit.nombre}
                </Text>
                <Text style={{ color: "#c2c2c2" }}>
                  #{this.props.itemToEdit.idProducto}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginVertical: 10
                }}
              >
                <Text
                  style={{
                    fontSize: 38,
                    fontWeight: "500",
                    color: "rgb(130, 130, 130)"
                  }}
                >
                  ${this.props.itemToEdit.precio * this.state.counter}
                </Text>
                <CounterButton
                  decreaseCount={() => this.decreaseCount()}
                  increaseCount={() => this.increaseCount()}
                  counter={this.state.counter}
                  new={0}
                />
              </View>
            </View>

            <Button
              style={{ borderRadius: 0 }}
              color="rgb(49, 186, 201)"
              mode="contained"
              onPress={() => this.setCantidadProducto()}
            >
              <Text style={{ color: "white", fontSize: 22 }}>
                MODIFICAR ${this.props.itemToEdit.precio * this.state.counter}
              </Text>
            </Button>
          </View>
        </Modal>
      );
    }

    return null;
  }
}

function mapStateToProps(state) {
  return {
    cart: state.reducerCarrito.cart,
    itemToEdit: state.reducerCarrito.itemToEdit
  };
}

const mapDispatchToProps = dispatch => ({
  cancelProductToEdit: () => {
    dispatch(cancelProductToEdit());
  },
  editItemCart: (cart, item) => {
    dispatch(addProductToCart(cart, item));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalEditItemCart);
