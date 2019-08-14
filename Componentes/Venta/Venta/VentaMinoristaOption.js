import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const VentaMinoristaOption = props => {
  return (
    <TouchableOpacity
      onPress={() => props.navigate()}
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20
      }}
    >
      <View
        style={{ backgroundColor: "#DDCDCD", borderRadius: 50, padding: 20 }}
      >
        {props.image}
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <Text style={{ fontSize: 32, fontWeight: "100" }}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default VentaMinoristaOption;
