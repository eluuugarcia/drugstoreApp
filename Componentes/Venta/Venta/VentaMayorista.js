import { View, Text, Image } from "react-native";
import { SearchBar } from "react-native-elements";
import { Container } from "native-base";
import {
  Feather,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { connect } from "react-redux";
import React, { Component } from "react";
import SearchedClients from "../Buscar Clientes/SearchedClients";

class VentaMayorista extends Component {
  state = {
    searchClients: null,
    search: null,
    initSearch: false
  };

  componentDidMount() {
    this.props.getClientes();
  }

  searchFilterFunction = text => {
    if (text.length > 0) {
      this.setState({ initSearch: true });
      const searchClients = this.props.clientes.filter(item => {
        const itemRazonSocial = item.cliente.razonSocial.toLowerCase();
        const itemCUIT = item.cliente.CUIT.toString().toLowerCase();
        const itemNroDocumento = item.cliente.numeroDocumento
          .toString()
          .toLowerCase();
        const textSearch = text.toLowerCase();

        return (
          itemRazonSocial.indexOf(textSearch) > -1 ||
          itemCUIT.indexOf(textSearch) > -1 ||
          itemNroDocumento.indexOf(textSearch) > -1
        );
      });
      this.setState({ searchClients: searchClients });
      this.setState({ search: text });
    } else {
      this.setState({ search: text });
      this.setState({ initSearch: false });
    }
  };

  cancelSearch() {
    this.setState({ search: null });
    this.setState({ initSearch: false });
  }

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <SearchBar
          ref={searchInput => (this.searchInput = searchInput)}
          value={this.state.search}
          platform="android"
          placeholder="Buscar cliente..."
          containerStyle={{ backgroundColor: "#5d357c" }}
          placeholderTextColor="white"
          inputContainerStyle={{ backgroundColor: "#5d357c" }}
          inputStyle={{ color: "white" }}
          showLoading={false}
          onChangeText={text => this.searchFilterFunction(text)}
          clearIcon={
            <MaterialIcons
              active
              name="close"
              color="white"
              style={{ marginLeft: 20 }}
              size={26}
              onPress={() => {
                this.cancelSearch();
              }}
            />
          }
          cancelIcon={
            <Feather
              active
              name="arrow-left"
              color="white"
              style={{ marginLeft: 20 }}
              size={26}
              onPress={() => {
                navigation.goBack();
              }}
            />
          }
          searchIcon={
            <FontAwesome
              active
              name="search"
              color="white"
              style={{ marginLeft: 20 }}
              size={20}
            />
          }
        />
        {this.state.initSearch ? (
          <SearchedClients searchedClients={this.state.searchClients} />
        ) : (
          <View
            style={{
              flex: 1,

              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View
              style={{
                backgroundColor: "#BFC7E0",
                borderRadius: 20
              }}
            >
              <Image
                style={{ marginVertical: 10, marginHorizontal: 10 }}
                source={require("../../../assets/icons8-buscar-cliente-100.png")}
              />
            </View>
            <View style={{}}>
              <Text
                style={{
                  marginVertical: 20,
                  fontSize: 20,
                  fontWeight: "bold",
                  textShadowColor: "#ba477b",
                  fontStyle: "italic",
                  textShadowOffset: {
                    width: 0.2,
                    height: 0.2
                  },
                  textShadowRadius: 1,
                  color: "#a3a3a3bf"
                }}
              >
                Busque un cliente para comenzar
              </Text>
            </View>
          </View>
        )}
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getClientes: () => {
      dispatch({ type: "GET_CLIENTES" });
    },
    removeTypeOfSale: () => {
      dispatch({ type: "REMOVE_TYPE_OF_SALE" });
    }
  };
};

const mapStateToProps = state => {
  return { clientes: state.reducerClientes.clientes };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VentaMayorista);
