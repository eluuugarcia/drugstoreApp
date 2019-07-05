// import liraries
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Text, Button } from "galio-framework";

// create a component
class MiUsuario extends Component {
  logout() {
    this.props.logout();
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Mi usuario</Text>
        <Button
          style={{
            width: 300,
            marginTop: 20,
            position: "relative",
            borderRadius: 40
          }}
          onPress={this.props.removeState}
          color="#1da1f2"
        >
          Borrar estado
        </Button>
        <Button
          style={{
            width: 300,
            marginTop: 20,
            position: "relative",
            borderRadius: 40
          }}
          onPress={this.props.logout}
          color="#1da1f2"
        >
          Cerrar Sesión
        </Button>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7f7"
  }
});

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch({ type: "LOGOUT" });
  },
  removeState: () => {
    dispatch({ type: "REMOVE_STATE" });
  }
});

// make this component available to the app
export default connect(
  null,
  mapDispatchToProps
)(MiUsuario);
