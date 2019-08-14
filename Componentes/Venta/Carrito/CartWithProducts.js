import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import CartProductList from "./CartProductList";
import { AntDesign, MaterialIcons, Entypo } from "@expo/vector-icons";
import { Button } from "react-native-paper";

function CartWithProducts(props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.totalContainer}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            color: "#666",
            marginLeft: 15
          }}
        >
          ${props.total}
        </Text>
      </View>
      <CartProductList products={props.cartProducts} total={props.total} />
      <View style={styles.buttonsContainer}>
        <Button
          style={styles.deleteButton}
          mode="contained"
          onPress={() => {
            props.cleanCart();
            //props.closeCart();
          }}
        >
          <MaterialIcons name="delete" color="#fff" size={22} />
        </Button>
        <Button style={styles.continuousButton} mode="contained">
          <Entypo name="check" color="#fff" size={22} />
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginVertical: 30,
    alignItems: "center"
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

export default CartWithProducts;
