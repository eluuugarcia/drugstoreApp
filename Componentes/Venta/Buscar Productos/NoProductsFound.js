import React from "react";
import { View, Text, Image } from "react-native";

function NoProductsFound(props) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#efefef"
      }}
    >
      <View style={{ flex: 1, marginVertical: 100, alignItems: "center" }}>
        <Image
          style={{ width: 120, height: 120 }}
          source={{
            uri: "https://img.icons8.com/cotton/2x/open-box--v1.png"
          }}
        />
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#4d4d4d"
          }}
        >
          OOPS!
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#4d4d4d"
          }}
        >
          No se encontraron productos...
        </Text>
      </View>
    </View>
  );
}

export default NoProductsFound;
