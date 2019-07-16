import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { editItemCart } from "../../../Redux/Actions/actionCarrito";
import { Badge } from "react-native-elements";

function Producto(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.editItem(props.cartProduct);
      }}
    >
      <View style={styles.producto}>
        <View style={styles.left}>
          <View
            style={{
              marginTop: 4
            }}
          >
            <Badge
              value={props.cartProduct.cantidad}
              badgeStyle={{ paddingVertical: 10, paddingHorizontal: 6 }}
              status="primary"
              textStyle={{ fontWeight: "600", fontSize: 14 }}
            />
          </View>

          <View style={{ marginLeft: 10 }}>
            <View>
              <Text style={styles.nombre} numberOfLines={1}>
                {props.cartProduct.nombre}
              </Text>
            </View>
            <Text style={styles.codigo}>#{props.cartProduct.idProducto}</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Text style={styles.precio}>${props.cartProduct.subtotal}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  producto: {
    marginHorizontal: 10,
    flexDirection: "row",
    marginVertical: 10
  },
  left: {
    flex: 2,
    flexDirection: "row"
  },
  nombre: {
    color: "#5f5f5f",
    fontSize: 17,
    fontWeight: "bold"
  },
  codigo: {
    color: "#828282",
    fontSize: 13
  },
  right: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  precio: {
    color: "#1da1f2",
    fontSize: 20,
    fontWeight: "bold"
  }
});

const mapDispatchToProps = dispatch => ({
  editItem: item => {
    dispatch(editItemCart(item));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Producto);
