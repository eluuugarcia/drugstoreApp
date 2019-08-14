import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import Modal from "react-native-modal";
import CounterButton from "./CounterButton";
import { cancelProductToEdit } from "../../../Redux/Actions/actionCarrito";
import {
  editProductToCart,
  removeProductToCart
} from "../../../Redux/Actions/actionVentas";

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

    this.setState({ counter: 1 });
    this.props.editItemCart(this.props.cart, newProduct, this.props.mayorista);
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
            <View style={{ flexDirection: "row" }}>
              <Button
                style={{ borderRadius: 0, flex: 1 }}
                color="rgba(184, 79, 78, 1)"
                mode="contained"
                onPress={() => {
                  this.props.cancelProductToEdit();
                  this.props.removeProductToCart(
                    this.props.cart,
                    this.props.itemToEdit
                  );
                }}
              >
                <Text style={{ color: "white", fontSize: 18 }}>ELIMINAR</Text>
              </Button>
              <Button
                style={{ borderRadius: 0 }}
                color="rgb(49, 186, 201)"
                mode="contained"
                onPress={() => this.setCantidadProducto()}
              >
                <Text style={{ color: "white", fontSize: 18 }}>
                  MODIFICAR ${this.props.itemToEdit.precio * this.state.counter}
                </Text>
              </Button>
            </View>
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
    itemToEdit: state.reducerCarrito.itemToEdit,
    mayorista: state.reducerVenta.mayorista
  };
}

const mapDispatchToProps = dispatch => ({
  cancelProductToEdit: () => {
    dispatch(cancelProductToEdit());
  },
  editItemCart: (cart, item, mayorista) => {
    dispatch(editProductToCart(cart, item, mayorista));
  },
  removeProductToCart: (cart, item) => {
    dispatch(removeProductToCart(cart, item));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalEditItemCart);
