import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";

import TouchableScale from "react-native-touchable-scale";
import { LinearGradient } from "expo-linear-gradient";

const PagoOption = (props) => {
  return (
    <TouchableScale onPress={() => props.onPress()}>
      <LinearGradient
        colors={[props.color1, props.color2]}
        start={[1, 0]}
        end={[0.2, 0]}
        style={styles.gradient}
      >
        <View style={styles.left}>
          <Image
            style={[styles.image, props.imageStyle]}
            source={{
              uri: props.image
            }}
          ></Image>
        </View>
        <View style={[styles.right, props.rightStyle]}>
          <Text style={styles.text}>{props.option}</Text>
        </View>
      </LinearGradient>
    </TouchableScale>
  );
};

const styles = StyleSheet.create({
  gradient: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 8,
    paddingHorizontal: 15
  },
  left: {
    flex: 1,
    paddingHorizontal: 10
  },
  image: {
    width: "100%",
    height: 100
  },
  right: {
    flex: 2,
    alignItems: "center"
  },
  text: {
    fontSize: 30,
    fontWeight: "700",
    fontFamily: "sans-serif-medium",
    textShadowColor: "rgba(0, 0, 0, .6)",
    textShadowOffset: {
      width: 1.5,
      height: 1.5
    },
    textShadowRadius: 2,
    color: "#fff",
    textAlign: "center"
  }
});

export default PagoOption;
