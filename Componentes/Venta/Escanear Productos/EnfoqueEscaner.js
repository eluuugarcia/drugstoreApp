import React from "react";
import { View, Text } from "react-native";

const EnfoqueEscaner = () => {
  return (
    <View
      style={{
        flex: 1,

        justifyContent: "center"
      }}
    >
      <View
        style={{
          flex: 0.5,
          marginHorizontal: 20,
          alignContent: "center",
          justifyContent: "space-between",
          backgroundColor: "rgba(78, 56, 65, 0.5)"
        }}
      >
        <View
          style={{
            flex: 0.1
          }}
        >
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View
              style={{
                flex: 0.1,
                borderTopWidth: 3,
                borderLeftWidth: 3,
                borderColor: "white"
              }}
            />
            <View
              style={{
                flex: 1
              }}
            />
            <View
              style={{
                flex: 0.1,
                borderTopWidth: 3,
                borderRightWidth: 3,
                borderColor: "white"
              }}
            />
          </View>
        </View>
        <View
          style={{
            flex: 0.1
          }}
        >
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View
              style={{
                flex: 0.1,
                borderBottomWidth: 3,
                borderLeftWidth: 3,
                borderColor: "white"
              }}
            />
            <View
              style={{
                flex: 1
              }}
            />
            <View
              style={{
                flex: 0.1,
                borderBottomWidth: 3,
                borderRightWidth: 3,
                borderColor: "white"
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default EnfoqueEscaner;
