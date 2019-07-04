// import liraries
import React, { Component } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome,
  MaterialIcons
} from "@expo/vector-icons";
import { connect } from "react-redux";
import { Header, Title, Right, Body, Animated } from "native-base";
import { ListItem } from "react-native-elements";

import TouchableScale from "react-native-touchable-scale";
import { LinearGradient } from "expo";

// create a component
class Venta extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <Header noLeft style={{ backgroundColor: "#35377c" }}>
          <Body style={{ paddingVertical: 150 }}>
            <Title style={{ fontWeight: "bold" }}>Nueva Venta</Title>
          </Body>
          <Right>
            <MaterialCommunityIcons
              active
              name="cart"
              color="white"
              size={32}
            />
          </Right>
        </Header>
        <View style={styles.container}>
          <ListItem
            onPress={() => {
              navigation.navigate("BuscarProductos");
            }}
            containerStyle={{ borderRadius: 10 }}
            Component={TouchableScale}
            friction={90}
            tension={100}
            activeScale={0.85}
            linearGradientProps={{
              colors: ["#e3895b", "#923121"],
              start: [1, 0],
              end: [0.2, 0]
            }}
            ViewComponent={LinearGradient} // Only if no expo
            leftElement={
              <FontAwesome active name="search" color="white" size={30} />
              // <Image style={{ width: 50, height: 50 }} source={{ uri: 'http://pluspng.com/img-png/search-button-png-search-button-icon-260.png' }} />
            }
            title="Buscar productos"
            titleStyle={{
              color: "white",
              fontWeight: "bold",
              fontSize: 24,
              textShadowColor: "rgba(34.9, 34.5, 34.5, 0.4)",
              textShadowOffset: {
                width: 1.0,
                height: 1.0
              },
              textShadowRadius: 2,
              marginLeft: 20
            }}
            chevronColor="white"
            chevron
          />
          <ListItem
            onPress={() => {
              navigation.navigate("LeerProductos");
            }}
            containerStyle={{ borderRadius: 10 }}
            Component={TouchableScale}
            friction={90}
            tension={100}
            activeScale={0.85} //
            linearGradientProps={{
              colors: ["#439cba", "#323471"],
              start: [1, 0],
              end: [0.2, 0]
            }}
            ViewComponent={LinearGradient}
            leftElement={
              //  <Image style={{ width: 50, height: 50 }} source={{ uri: 'https://static.thenounproject.com/png/547392-200.png' }} />
              <MaterialCommunityIcons
                active
                name="barcode-scan"
                color="white"
                size={32}
              />
            }
            title="Escanear producto"
            titleStyle={{
              color: "white",
              fontWeight: "bold",
              fontSize: 24,
              textShadowColor: "rgba(34.9, 34.5, 34.5, 0.4)",
              textShadowOffset: {
                width: 1.0,
                height: 1.0
              },
              textShadowRadius: 2,
              marginLeft: 20
            }}
            chevronColor="white"
            chevron
          />

          <ListItem
            containerStyle={{ borderRadius: 10 }}
            Component={TouchableScale}
            friction={90}
            tension={100}
            activeScale={0.85} //
            linearGradientProps={{
              colors: ["#a44e95", "#371633"],
              start: [1, 0],
              end: [0.2, 0]
            }}
            ViewComponent={LinearGradient} // Only if no expo
            leftElement={
              <MaterialIcons
                active
                name="library-add"
                color="white"
                size={30}
              />
              // <Image style={{ width: 50, height: 50 }} source={{ uri: 'http://pluspng.com/img-png/search-button-png-search-button-icon-260.png' }} />
            }
            title="Agregar producto"
            titleStyle={{
              color: "white",
              fontWeight: "bold",
              fontSize: 24,
              textShadowColor: "rgba(34.9, 34.5, 34.5, 0.4)",
              textShadowOffset: {
                width: 1.0,
                height: 1.0
              },
              textShadowRadius: 2,
              marginLeft: 20
            }}
            chevronColor="white"
            chevron
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
    paddingVertical: 50,
    paddingHorizontal: 20,
    alignContent: "flex-end",
    justifyContent: "space-around"
  },
  searchButton: {
    width: 250,
    backgroundColor: "#1da1f2",
    marginRight: 40
  },
  searchView: {
    flex: 1,
    top: 0,
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "space-between"
  },
  scanCode: {
    flex: 0.7,
    alignItems: "center"
  }
});

function mapStateToProps(state) {
  return { productos: state.reducerProductos.productos };
}
const mapDispatchToProps = dispatch => ({
  getProductos: () => {
    dispatch({ type: "GET_PRODUCTOS" });
  }
});

// make this component available to the app
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Venta);
