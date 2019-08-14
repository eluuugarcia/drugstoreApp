import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import Cliente from "./SearchedClientsListItem";

const renderItemSearch = ({ item }) => <Cliente cliente={item} />;

const keyExtractor = item => item.cliente.CUIT.toString();

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

function SearchClientsList(props) {
  return (
    <View style={{ flex: 5 }}>
      <FlatList
        keyExtractor={keyExtractor}
        data={props.clientes}
        renderItem={renderItemSearch}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
}

export default SearchClientsList;
