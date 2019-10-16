import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StatusBar, Platform, Dimensions, Text } from "react-native";
import Login from "./Componentes/Login/Login";
import { NavBar } from "./Componentes/Navigation/Nav";
import Loading from "./Componentes/GlobalUtils/Loading";
import Animation from "./Componentes/GlobalUtils/Animation";
import ErrorsModal from "./Componentes/GlobalUtils/ErrorsModal";
import THEME from "./Componentes/GlobalUtils/THEME";

function mapStateToProps(state) {
  return {
    token: state.reducerSession.token,
    ok: state.reducerCarrito.ok,
    loading: state.reducerLoading.loading,
    showAnimation: state.reducerAnimations.showAnimation,
    animation: state.reducerAnimations.animation,
    textAnimation: state.reducerAnimations.textAnimation,
    colorAnimation: state.reducerAnimations.colorAnimation,
    speedAnimation: state.reducerAnimations.speedAnimation
  };
}

class Start extends Component {
  render() {
    if (this.props.token) {
      return (
        <View style={{ flex: 1 }}>
          <View
            style={{
              backgroundColor: THEME.appBarColor,
              height: Platform.OS === "ios" ? 20 : StatusBar.currentHeight
            }}
          >
            <StatusBar translucent barStyle="light-content" />
          </View>
          <NavBar />
          <ErrorsModal></ErrorsModal>
          {this.props.showAnimation ? (
            <Animation
              uri={this.props.animation}
              speed={this.props.speedAnimation}
              children={
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: this.props.colorAnimation,
                    flex: 1,
                    marginHorizontal: 20,
                    borderRadius: 20
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "600",
                      color: "#e4e4e4"
                    }}
                  >
                    {this.props.textAnimation}
                  </Text>
                </View>
              }
            />
          ) : null}
          {this.props.loading ? (
            <View
              style={{
                position: "absolute",
                width: "100%",
                height: "100%"
              }}
            >
              <Loading color="#b88ae6" />
            </View>
          ) : null}
        </View>
      );
    }
    return <Login login={this.props.login} />;
  }
}

export default connect(
  mapStateToProps,
  null
)(Start);
