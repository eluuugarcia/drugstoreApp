import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import Modal from "react-native-modal";
import CartProductList from "./CartProductList";

class Carrito extends Component {
  state = {
    total: 0
  };

  total = productos => {
    let total = 0;
    for (let i = 0; i < productos.length; i++) {
      total = total + productos[i].subtotal;
    }
  };

  render() {
    return (
      <Modal
        isVisible={this.props.cartVisible}
        swipeDirection="down"
        animationIn="slideInUp"
        onSwipeComplete={() => {
          this.props.closeCart();
        }}
        style={{
          marginTop: 80,
          marginHorizontal: 5,
          marginVertical: 0
        }}
      >
        <View
          style={{
            backgroundColor: "#f0f0f0",
            flex: 1,
            borderTopStartRadius: 30,
            borderTopEndRadius: 30,
            justifyContent: "center",
            alignContent: "center",
            paddingVertical: 10,
            paddingHorizontal: 10
          }}
        >
          <Text>Holis</Text>
          <CartProductList products={this.props.cartProducts} />
          <View
            style={{
              flex: 0.2,
              backgroundColor: "white",
              marginVertical: 30,
              marginHorizontal: 30,
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",

              paddingVertical: 15
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "#666" }}>
              Total
            </Text>
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "#666" }}>
              {}
            </Text>
          </View>
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Carrito);
