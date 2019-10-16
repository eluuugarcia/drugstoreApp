import React from "react";
import { Button, StyleSheet, Dimensions, View } from "react-native";
import LottieView from "lottie-react-native";
import { connect } from "react-redux";

class Animation extends React.Component {
  render() {
    const { width } = Dimensions.get("window");
    const { height } = Dimensions.get("window");
    return (
      <View
        style={{
          width: width,
          height: height,
          position: "absolute",
          paddingVertical: height / 5,
          // paddingHorizontal: width / 40,
          backgroundColor: "rgba(0, 0, 0, 0.7)"
        }}
      >
        <LottieView
          source={this.props.uri}
          autoPlay
          speed={this.props.speed}
          loop
          style={{
            width: width
          }}
        />
        {this.props.children}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ok: state.reducerCarrito.ok
  };
};

export default connect(
  mapStateToProps,
  null
)(Animation);
