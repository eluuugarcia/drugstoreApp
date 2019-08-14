import React from "react";
import { Text, View, StyleSheet } from "react-native";
import OptionMayMin from "./Option-May-Min";

function SelectMayMin(props) {
  return (
    <View style={styles.container}>
      <OptionMayMin mayorista={true} navigate={props.ventaMayorista} />
      <OptionMayMin mayorista={false} navigate={props.ventaMinorista} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    backgroundColor: "white",
    paddingHorizontal: 40,
    justifyContent: "space-evenly"
  }
});

export default SelectMayMin;
