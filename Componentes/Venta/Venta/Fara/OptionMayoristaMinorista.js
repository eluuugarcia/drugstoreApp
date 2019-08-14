import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

function OptionMayoristaMinorista(props) {
  return (
    <TouchableOpacity
      onPress={() => props.onClick()}
      style={{
        backgroundColor: props.backgroundColor,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "#707070"
      }}
    >
      <View style={{ flex: 1, marginHorizontal: 10, marginTop: 20 }}>
        <Text style={{ color: "white", fontSize: 26, fontWeight: "500" }}>
          {props.title}
        </Text>
        <Text style={{ color: "white", fontSize: 12, fontStyle: "italic" }}>
          {props.desc}
        </Text>
      </View>
      <View
        style={{ flex: 3, justifyContent: "center", paddingHorizontal: 40 }}
      >
        {props.mayorista ? (
          <Image
            style={{ width: 100, height: 100 }}
            source={require("../../../assets/icons8-mover-por-carretilla-80.png")}
          />
        ) : (
          <Image
            style={{ width: 100, height: 100 }}
            source={require("../../../assets/icons8-box-love-100.png")}
          />
        )}
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
          marginVertical: 0,
          marginHorizontal: 15
        }}
      >
        {props.mayorista ? (
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../../../assets/icons8-comprobado-80-3.png")}
          />
        ) : (
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../../../assets/icons8-comprobado-80-4.png")}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}

export default OptionMayoristaMinorista;
