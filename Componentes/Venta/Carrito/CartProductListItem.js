import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
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
              <View>
                <Image
                  style={{ width: 30, height: 30, marginRight: 20 }}
                  source={{
                    uri:
                      "https://volumeintegration.com/wp-content/uploads/PackageIcon.png"
                  }}
                />
              </View>

              <View>
                <View>
                  <Text style={styles.nombre} numberOfLines={1}>
                    {props.cartProduct.cantidad} x {props.cartProduct.nombre}
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
    justifyContent: "space-between",
    paddingVertical: 5
  },
  left: {
    flex: 1,
    flexDirection: "row"
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
  }
});

export default Producto;
