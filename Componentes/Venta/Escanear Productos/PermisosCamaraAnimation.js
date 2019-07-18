import React from "react";
import { StyleSheet, View, Text } from "react-native";
import LottieView from "lottie-react-native";

function PermisosCamaraAnimation(props) {
  return (
    <View
      style={{
        flex: 1.5,
        alignItems: "center"
      }}
    >
      <LottieView
        source={require("../../../assets/animations/scan/animation-w470-h640.json")}
        autoPlay
        loop
        style={{
          width: 250
        }}
      />
    </View>
  );
}

export default PermisosCamaraAnimation;
