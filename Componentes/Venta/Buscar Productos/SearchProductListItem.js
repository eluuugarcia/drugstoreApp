import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import TouchableScale from "react-native-touchable-scale";
import { LinearGradient } from "expo-linear-gradient";
import { ListItem } from "react-native-elements";
import { connect } from "react-redux";

const selectProduct = product => {
  this.props.productToAdd(product);
};
function Producto(props) {
  return (
    <ListItem
      key={props.producto.producto.idProducto}
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
        <Text style={{ color: "#7a7bb1" }}>
          #{props.producto.producto.idProducto}
        </Text>
      }
      chevron={
        <View>
          <Text style={{ fontWeight: "bold", color: "#1d9eb1", fontSize: 18 }}>
            $
            {props.mayorista
              ? props.producto.precioVentaMayorista
              : props.producto.precioVentaMinorista}
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

const mapStateToProps = state => {
  return {
    mayorista: state.reducerVenta.mayorista
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Producto);
