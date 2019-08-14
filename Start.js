import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StatusBar, Platform } from "react-native";
import Login from "./Componentes/Login/Login";
import { NavBar } from "./Componentes/Navigation/Nav";

function mapStateToProps(state) {
  return { token: state.reducerSession.token, ok: state.reducerCarrito.ok };
}

class Start extends Component {
  render() {
    if (this.props.token) {
      return (
        <View style={{ flex: 1 }}>
          <View
            style={{
              backgroundColor: "#5d357c",
              height: Platform.OS === "ios" ? 20 : StatusBar.currentHeight
            }}
          >
            <StatusBar translucent barStyle="light-content" />
          </View>
          <NavBar />
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
