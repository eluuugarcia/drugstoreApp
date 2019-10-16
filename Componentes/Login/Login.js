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
import LoginForm from "./login-form";
import ErrorModalLogin from "../GlobalUtils/ErrorModalLogin";
import Loading from "../GlobalUtils/Loading";

// create a component
class Login extends Component {
  login(loginValues) {
    this.props.setLoading();
    this.props.login(loginValues);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../../assets/f41.png")}
          style={styles.backgroundImage}
        />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center"
          }}
        >
          <View style={styles.logo}>
            <Image
              source={require("../../assets/logo.png")}
              style={styles.imglogo}
            />
            <Text style={styles.logoText}>DrugSoft</Text>
          </View>

          <View style={styles.loginForm}>
            <LoginForm login={(loginValues) => this.login(loginValues)} />
            <Text style={styles.forgotPass}>¿Olvidaste tu contraseña?</Text>
          </View>

          <ErrorModalLogin />
        </View>
        {this.props.loading ? (
          <View
            style={{
              position: "absolute",
              width: "100%",
              height: "100%"
            }}
          >
            <Loading color="#1d9eb1" />
          </View>
        ) : null}
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
    resizeMode: "center",
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  loginForm: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginVertical: 30
  },
  logo: {
    flex: 0.5,
    alignItems: "center"
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
    login: (loginValues) => {
      dispatch({ type: "LOGIN", loginValues });
    }
  };
}

function mapStateToProps(state) {
  return { loading: state.reducerLoading.loading };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
