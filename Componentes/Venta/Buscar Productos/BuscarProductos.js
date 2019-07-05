// import liraries
import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { SearchBar } from "react-native-elements";
import { Container } from "native-base";
import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { connect } from "react-redux";
import SearchedProducts from "./SearchedProducts";

// create a component
class BuscarProductos extends Component {
  constructor() {
    super();
    this.state = {
      searchProducts: null,
      search: null,
      initSearch: false
    };
  }
  static navigationOptions = {
    title: "",
    header: null
  };
  state = {
    search: ""
  };

  componentDidMount() {
    this.props.getProductos();
    this.searchInput.focus();
    this.searchInput.blur();
  }

  renderItem = ({ item }) => <Producto {...item} />;

  keyExtractor(item) {
    return item.producto.idProducto.toString();
  }

  searchFilterFunction = text => {
    if (text.length > 0) {
      this.setState({ initSearch: true });
      const searchProducts = this.props.productos.filter(item => {
        const itemName = item.producto.nombre.toLowerCase();
        const itemID = item.idProducto.toString().toLowerCase();
        const textSearch = text.toLowerCase();

        return (
          itemName.indexOf(textSearch) > -1 || itemID.indexOf(textSearch) > -1
        );
      });
      this.setState({ searchProducts: searchProducts });
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
    const { navigation } = this.props;

    return (
      <Container style={{ backgroundColor: "#f2f2f2" }}>
        <SearchBar
          ref={searchInput => (this.searchInput = searchInput)}
          value={this.state.search}
          platform="android"
          placeholder="Buscar productos..."
          containerStyle={{ backgroundColor: "#35377c" }}
          placeholderTextColor="white"
          inputContainerStyle={{ backgroundColor: "#35377c" }}
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
        <View
          style={{
            flex: 10
          }}
        >
          {!this.state.initSearch ? (
            <View
              style={{
                flex: 0.7,
                paddingVertical: 20,
                paddingHorizontal: 20,
                alignItems: "center"
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image
                  style={styles.imageSearch}
                  source={{
                    uri:
                      "https://img.icons8.com/bubbles/2x/google-web-search.png"
                  }}
                />
                <Text style={styles.busqueText}>Busque sus productos</Text>
              </View>
            </View>
          ) : (
            <SearchedProducts searchedProducts={this.state.searchProducts} />
          )}
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  searchBar: {
    flex: 1
  },
  busqueText: {
    fontSize: 20,
    fontWeight: "bold",
    textShadowColor: "#f8ada9",
    fontStyle: "italic",
    textShadowOffset: {
      width: 0.2,
      height: 0.2
    },
    textShadowRadius: 1,
    color: "#a3a3a3bf"
  },
  imageSearch: { width: 200, height: 200, opacity: 0.3 }
});

function mapStateToProps(state) {
  return { productos: state.reducerProductos.productos };
}

const mapDispatchToProps = dispatch => ({
  getProductos: () => {
    dispatch({ type: "GET_PRODUCTOS" });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BuscarProductos);
