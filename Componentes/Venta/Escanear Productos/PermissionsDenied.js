import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";

function PermissionsDenied() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 50
      }}
    >
      <View
        style={{
          flex: 2,
          justifyContent: "center",
          marginVertical: 80
        }}
      >
        <Image
          source={{
            uri: "http://pluspng.com/img-png/png-sad-emoji-emoticon-sad-256.png"
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <View
        style={{
          flex: 3,
          alignItems: "center"
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#133ad9"
          }}
        >
          OOPS!
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#4d4d4d",
            textAlign: "center"
          }}
        >
          No nos has dado permiso!
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#4d4d4d",
            textAlign: "center",
            marginTop: 10
          }}
        >
          Ve a configuración para asignar permisos o vuelve a instalar la
          aplicacion
        </Text>
      </View>
    </View>
  );
}

export default PermissionsDenied;
