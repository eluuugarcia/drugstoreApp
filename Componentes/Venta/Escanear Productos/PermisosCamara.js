import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PermisosCamaraAnimation from "./PermisosCamaraAnimation";
import { Button } from "react-native-paper";

function PermisosCamara(props) {
  return (
    <View style={{ flex: 1 }}>
      <PermisosCamaraAnimation />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          marginHorizontal: 50
        }}
      >
        <View
          style={{
            flex: 2
          }}
        >
          <Text style={styles.permisosText}>
            Necesitamos tu permiso para acceder a la cámara
          </Text>
        </View>

        <View style={{ flex: 3, marginHorizontal: 80 }}>
          <Button style={styles.permisosButton} mode="contained">
            Dar permiso
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  permisosButton: {
    backgroundColor: "#353b8d"
  },
  permisosText: {
    fontSize: 24,
    fontWeight: "500",
    color: "#515050",

    textAlign: "center"
  }
});

export default PermisosCamara;
