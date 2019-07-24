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
        rightColor="#ed3d3c"
        leftColor="#ed548b"
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
        rightColor="#a94b8c"
        leftColor="#45448f"
        navigate={props.escanearProductos}
      />
      <VentaOption
        title="Agregar Productos"
        icon={
          <MaterialIcons active name="library-add" color="white" size={30} />
        }
        rightColor="#155eaa"
        leftColor="#32a4dd"
        navigate={() => console.log("not implemented jiji")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#efefef",
    paddingVertical: 50,
    paddingHorizontal: 20,
    alignContent: "flex-end",
    justifyContent: "space-around"
  }
});

export default Options;
