import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { SwipeRow, Button } from "native-base";
import { Badge } from "react-native-elements";

function Producto(props) {
  return (
    <View style={styles.container}>
      <SwipeRow
        rightOpenValue={160}
        leftOpenValue={0}
        left={<View />}
        body={
          <View style={styles.producto}>
            <View style={styles.left}>
              <View style={{ marginTop: 4 }}>
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
                <Text style={styles.codigo}>
                  #{props.cartProduct.idProducto}
                </Text>
              </View>
            </View>
            <View style={styles.right}>
              <Text style={styles.precio}>${props.cartProduct.subtotal}</Text>
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
    flex: 1
  },
  producto: {
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  left: {
    flex: 1,
    flexDirection: "row"
  },
  nombre: {
    color: "#5f5f5f",
    fontSize: 16,
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
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default Producto;
