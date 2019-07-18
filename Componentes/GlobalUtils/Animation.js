import React from "react";
import { Button, StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import { connect } from "react-redux";

class Animation extends React.Component {
  render() {
    if (this.props.ok) {
      return (
        <LottieView
          source={require("../../assets/animations/433-checked-done.json")}
          autoPlay
          loop
          //style={{ backgroundColor: "#000", position: "absolute", top: 0 }}
        />
      );
    }
    return null;
  }
}

const mapStateToProps = state => {
  return {
    ok: state.reducerCarrito.ok
  };
};

export default connect(
  mapStateToProps,
  null
)(Animation);
