import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import Modal from "react-native-modal";
import CounterButton from "./CounterButton";
import { addProductToCart } from "../../../Redux/Actions/actionVentas";

class ModalAddProduct extends Component {
  state = {
    counter: 1
  };

  setCantidadProducto() {
    let subtotal = 0;
    if (this.props.mayorista) {
      subtotal =
        this.props.productToAdd.precioVentaMayorista * this.state.counter;
    } else {
      subtotal =
        this.props.productToAdd.precioVentaMinorista * this.state.counter;
    }

    const newProduct = {
      ...this.props.productToAdd,
      cantidad: this.state.counter,
      subtotal
    };
    this.setState({ counter: 1 });
    this.props.addProductToCart(
      this.props.cart,
      newProduct,
      this.props.mayorista
    );
    this.props.cancelProductToAdd();
  }

  increaseCount = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decreaseCount = () => {
    const { counter } = this.state;
    if (counter > 1) {
      this.setState({ counter: this.state.counter - 1 });
    } else {
      return;
    }
  };

  render() {
    if (this.props.productToAdd) {
      return (
        <Modal
          isVisible
          swipeDirection={["up", "down", "right", "left"]}
          animationIn="tada"
          onSwipeComplete={() => {
            this.setState({ counter: 1 });
            this.props.cancelProductToAdd();
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
                  {this.props.productToAdd.producto.nombre}
                </Text>
                <Text style={{ color: "#c2c2c2" }}>
                  #{this.props.productToAdd.producto.idProducto}
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
                  $
                  {this.props.mayorista
                    ? this.props.productToAdd.precioVentaMayorista *
                      this.state.counter
                    : this.props.productToAdd.precioVentaMinorista *
                      this.state.counter}
                </Text>
                <CounterButton
                  decreaseCount={() => this.decreaseCount()}
                  increaseCount={() => this.increaseCount()}
                  counter={this.state.counter}
                  new={1}
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
                AGREGAR $
                {this.props.mayorista
                  ? this.props.productToAdd.precioVentaMayorista *
                    this.state.counter
                  : this.props.productToAdd.precioVentaMinorista *
                    this.state.counter}
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
    productToAdd: state.reducerProductos.productToAdd,
    cart: state.reducerCarrito.cart,
    itemToEdit: state.reducerCarrito.itemToEdit,
    mayorista: state.reducerVenta.mayorista
  };
}

const mapDispatchToProps = dispatch => ({
  cancelProductToAdd: () => {
    dispatch({ type: "CANCEL_PRODUCT_TO_ADD" });
  },
  addProductToCart: (cart, product, mayorista) => {
    dispatch(addProductToCart(cart, product, mayorista));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalAddProduct);
