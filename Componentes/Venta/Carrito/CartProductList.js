import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import CartProductListItem from "./CartProductListItem";

const renderItem = ({ item }) => <CartProductListItem cartProduct={item} />;

const keyExtractor = item => item.idProductoDeSucursal.toString();

const itemSeparator = () => (
  <View
    style={{
      flex: 1,
      borderWidth: 0.3,
      borderColor: "#a7a7a7"
    }}
  />
);

function CartProductList(props) {
  return (
    <View
      style={{
        flex: 3,
        backgroundColor: "white",
        marginVertical: 30,
        marginHorizontal: 30,
        borderRadius: 30,
        paddingHorizontal: 5,
        paddingVertical: 20
      }}
    >
      <FlatList
        keyExtractor={keyExtractor}
        data={props.products}
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
}

export default CartProductList;
