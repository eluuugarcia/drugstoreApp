import React from "react";
import VentaOption from "./VentaOption";
import { StyleSheet, View, Text } from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome,
  MaterialIcons
} from "@expo/vector-icons";

function Options(props) {
  return (
    <View style={styles.container}>
      <VentaOption
        title="Buscar Productos"
        icon={<FontAwesome active name="search" color="white" size={30} />}
        rightColor="#234164"
        leftColor="#183352"
        navigate={props.buscarProductos}
      />
      <VentaOption
        title="Escanear Productos"
        icon={
          <MaterialCommunityIcons
            active
            name="barcode-scan"
            color="white"
            size={32}
          />
        }
        rightColor="#727d90"
        leftColor="#6d7789"
        navigate={props.escanearProductos}
      />
      <VentaOption
        title="Agregar Productos"
        icon={
          <MaterialIcons active name="library-add" color="white" size={30} />
        }
        rightColor="#c2d1d9"
        leftColor="#b9cad2"
        navigate={() => console.log("not implemented jiji")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
    paddingVertical: 50,
    paddingHorizontal: 20,
    alignContent: "flex-end",
    justifyContent: "space-around"
  }
});

export default Options;
