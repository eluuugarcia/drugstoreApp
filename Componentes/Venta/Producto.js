import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { SwipeRow, Button } from "native-base";

function Producto(props) {
  return (
    <View style={styles.container}>
      <SwipeRow
        rightOpenValue={-60}
        leftOpenValue={0}
        left={<View />}
        body={
          <View style={styles.producto}>
            <View style={styles.left}>
              <View style={styles.icon}>
                <AntDesign name="inbox" size={20} color="white" />
              </View>

              <View>
                <View>
                  <Text style={styles.nombre} numberOfLines={1}>
                    1x {props.producto.nombre}
                  </Text>
                </View>
                <Text style={styles.codigo}>#{props.idProducto}</Text>
              </View>
            </View>
            <View style={styles.right}>
              <Text style={styles.precio}>${props.precioVentaMayorista}</Text>
            </View>
          </View>
        }
        right={
          <Button danger>
            <FontAwesome active name="trash" color="white" size={26} />
          </Button>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  producto: {
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5
  },
  left: {
    flex: 1,
    flexDirection: "row"
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 100 / 2,
    backgroundColor: "#1da1f2",
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginRight: 20
  },
  nombre: {
    color: "#5f5f5f",
    fontSize: 14,
    fontWeight: "bold"
  },
  codigo: {
    color: "#828282",
    fontSize: 12
  },
  right: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  precio: {
    color: "#1da1f2",
    fontSize: 16,
    fontWeight: "bold"
  },
  linea: {
    borderBottomWidth: 1,
    borderBottomColor: "#cbcbcb",
    marginLeft: 60
  }
});

export default Producto;
