import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";

import CartWithProducts from "./CartWithProducts";
import HeaderCarrito from "./HeaderCarrito";
import EmptyCart from "./EmptyCart";

class Carrito extends Component {
  state = {
    total: 0
  };

  render() {
    return (
      <Modal
        isVisible={this.props.openCart}
        swipeDirection="down"
        animationIn="slideInUp"
        onSwipeComplete={() => {
          console.log("cerrado por swip");
          this.props.closeCart();
        }}
        style={styles.modal}
      >
        <View style={styles.container}>
          <HeaderCarrito closeCart={this.props.closeCart} />
          {this.props.cartProducts.length > 0 ? (
            <CartWithProducts
              cartProducts={this.props.cartProducts}
              total={this.props.total}
              cleanCart={this.props.cleanCart}
              closeCart={this.props.closeCart}
            />
          ) : (
            <EmptyCart goToSearchProducts={this.props.goToSearchProducts} />
          )}
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    marginTop: 80,
    marginHorizontal: 5,
    marginVertical: 0
  },
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    justifyContent: "center",
    alignContent: "center",
    paddingVertical: 10
  },
  totalContainer: {
    flex: 0.2,
    //backgroundColor: "white",
    marginVertical: 30,
    marginHorizontal: 30,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 15
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 0.45,
    marginVertical: 30
  },
  deleteButton: {
    backgroundColor: "#c02942",
    paddingHorizontal: 30,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20
  },
  continuousButton: {
    backgroundColor: "#46a149",
    paddingHorizontal: 30,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0
  }
});

function mapStateToProps(state) {
  return {
    openCart: state.reducerCarrito.openCart,
    total: state.reducerCarrito.totalCart,
    cartProducts: state.reducerCarrito.cart
  };
}

const mapDispatchToProps = dispatch => ({
  closeCart: () => {
    dispatch({ type: "CLOSE_CART" });
  },
  cleanCart: () => {
    dispatch({ type: "CLEAN_CART" });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Carrito);
