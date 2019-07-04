// import liraries
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  Text
} from "react-native";
import { connect } from "react-redux";
import KeyboardSpacer from "react-native-keyboard-spacer";
import LoginForm from "./login-form";
import ErrorModal from "../Componentes/GlobalUtils/ErrorModal";
import Loading from "../Componentes/GlobalUtils/Loading";

// create a component
class Login extends Component {
  login(loginValues) {
    this.props.setLoading();
    this.props.login(loginValues);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          <ImageBackground
            source={require("../assets/f41.png")}
            style={styles.backgroundImage}
          />

          <View style={styles.logo}>
            <Image
              source={require("../assets/logo.png")}
              style={styles.imglogo}
            />
            <Text style={styles.logoText}>DrugSoft</Text>
          </View>

          <View style={styles.loginForm}>
            <LoginForm login={loginValues => this.login(loginValues)} />
            <Text style={styles.forgotPass}>¿Olvidaste tu contraseña?</Text>
          </View>

          <ErrorModal />
        </View>

        <View
          style={{
            position: "absolute",
            flex: 100
          }}
        >
          <Loading />
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover"
  },
  loginForm: {
    flex: 4,
    position: "absolute",
    // paddingHorizontal: 30,
    top: 200,
    bottom: 0,
    left: 0,
    right: 0,
    marginTop: 30,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  logo: {
    flex: 1,
    position: "absolute",
    top: 0,
    paddingHorizontal: 118,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center"
  },
  imglogo: {
    width: 40,
    height: 40,
    top: 80
    // marginHorizontal: 160,
  },
  logoText: {
    color: "#fff",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, .6)",
    textShadowOffset: {
      width: 1.5,
      height: 1.5
    },
    fontSize: 30,
    textShadowRadius: 2,
    top: 80
    // marginHorizontal: 118,
  },
  forgotPass: {
    color: "#fff",
    fontSize: 14,
    marginHorizontal: 52,
    marginBottom: 45
  }
});

function mapDispatchToProps(dispatch) {
  return {
    setLoading: () => {
      dispatch({ type: "SET_LOADING" });
    },
    login: loginValues => {
      dispatch({ type: "LOGIN", loginValues });
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Login);
