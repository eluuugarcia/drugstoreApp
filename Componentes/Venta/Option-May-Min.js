import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

function OptionMayMin(props) {
  return (
    <TouchableOpacity
      onPress={() => props.navigate()}
      style={{
        backgroundColor: props.mayorista ? "#BFC0DB" : "#CCBFE0",
        ...styles.container
      }}
    >
      <Image
        style={styles.iconImage}
        source={
          props.mayorista
            ? require("../../assets/icons8-mover-por-carretilla-80.png")
            : require("../../assets/icons8-box-love-100.png")
        }
      />
      <Text style={styles.title}>
        {props.mayorista ? "Venta Mayorista" : "Venta Minorista"}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "space-around"
  },
  iconImage: {
    width: 80,
    height: 80
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, .6)",
    textShadowOffset: {
      width: 1,
      height: 1
    },
    textShadowRadius: 2
  }
});

export default OptionMayMin;
