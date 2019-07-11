import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { Button } from "react-native-paper";

const url =
  "https://www.canyonescalade.com/wp-content/themes/mrtailor/images/empty_cart_retina.png";

function EmptyCart(props) {
  return (
    <View
      style={{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        flex: 1
      }}
    >
      <View style={{ flex: 2, justifyContent: "center", marginVertical: 20 }}>
        <Image
          resizeMode="contain"
          style={{ height: 350, width: 350 }}
          source={{
            uri: url
          }}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          flex: 0.5,
          //backgroundColor: "red",
          alignContent: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#757575" }}>
          Carrito vacío!
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#b1b1b1" }}>
          Agregue productos para comenzar
        </Text>
      </View>

      <View style={{ marginVertical: 20, flex: 0.5 }}>
        <Button
          uppercase={false}
          mode="contained"
          onPress={props.goToSearchProducts}
        >
          Buscar productos
        </Button>
      </View>
    </View>
  );
}

export default EmptyCart;
