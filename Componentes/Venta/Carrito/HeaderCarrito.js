import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { AntDesign, MaterialIcons, Entypo } from "@expo/vector-icons";

function HeaderCarrito(props) {
  return (
    <View>
      <View style={styles.header}>
        <View style={{ flex: 2 }}>
          <AntDesign
            name="down"
            color="#4c4c4c"
            size={22}
            style={{ marginHorizontal: 30 }}
            onPress={() => {
              props.closeCart();
            }}
          />
        </View>

        <View style={{ flex: 3 }}>
          <Text style={styles.miCarritoText}>Mi Carrito</Text>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "#dfdfdf",
          borderBottomWidth: 2
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginVertical: 5,
    alignItems: "center"
  },
  miCarritoText: {
    fontSize: 22,
    fontWeight: "500",
    color: "#626262"
  }
});

export default HeaderCarrito;
