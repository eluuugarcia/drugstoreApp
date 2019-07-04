import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import CartProductListItem from "../Producto";
import SearchProductListItem from "./SearchProductListItem";
import ModalAddProduct from "../Carrito/ModalAddProduct";

const renderItemSearch = ({ item }) => (
  <SearchProductListItem producto={item} />
);

// const renderItemCart = ({ item }) => (
//   <CartProductListItem {...item} />
// );

const keyExtractor = item => item.producto.idProducto.toString();

const itemSeparator = () => (
  <View
    style={{
      flex: 1,
      marginLeft: 70,
      borderWidth: 0.5,
      borderColor: "#a7a7a7"
    }}
  />
);

function ProductsList(props) {
  return (
    <View style={{ flex: 5 }}>
      <FlatList
        keyExtractor={keyExtractor}
        data={props.products}
        renderItem={renderItemSearch}
        ItemSeparatorComponent={itemSeparator}
      />
      <ModalAddProduct />
    </View>
  );
}

export default ProductsList;
