import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import TouchableScale from "react-native-touchable-scale";
import { LinearGradient } from "expo";
import { ListItem } from "react-native-elements";
import { connect } from "react-redux";

const selectProduct = product => {
  console.log(product);
  this.props.productToAdd(product);
};
function Producto(props) {
  console.log(props);
  return (
    <ListItem
      key={props.producto.idProducto}
      Component={TouchableScale}
      friction={90}
      tension={100}
      activeScale={0.96}
      linearGradientProps={{
        colors: ["#f8f8f8", "#f0f0f0"],
        start: [1, 0],
        end: [0.2, 0]
      }}
      onPress={() => props.productToAdd(props.producto)}
      ViewComponent={LinearGradient} // Only if no expo
      leftAvatar={
        <View>
          <Image
            style={{ width: 40, height: 40 }}
            source={{
              uri:
                "https://volumeintegration.com/wp-content/uploads/PackageIcon.png"
            }}
          />
        </View>
        //   {
        //   source: {
        //     uri:
        //       "https://volumeintegration.com/wp-content/uploads/PackageIcon.png"
        //   }
        // }
      }
      title={props.producto.producto.nombre}
      titleStyle={{ color: "#35377c", fontWeight: "bold" }}
      subtitleStyle={{ color: "white" }}
      subtitle={
        <Text style={{ color: "#7a7bb1" }}>#{props.producto.idProducto}</Text>
      }
      chevron={
        <View>
          <Text style={{ fontWeight: "bold", color: "#1d9eb1", fontSize: 18 }}>
            ${props.producto.precioVentaMayorista}
          </Text>
        </View>
      }
    />
  );
}

const mapDispatchToProps = dispatch => ({
  productToAdd: productToAdd => {
    dispatch({ type: "CREATE_PRODUCT_TO_ADD", productToAdd });
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Producto);
