import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import { Button, Paragraph, Dialog } from "react-native-paper";

class ErrorModalLogin extends Component {
  render() {
    let title = "";
    let paragraph = "";

    if (this.props.error) {
      title = "Ocurrió un error";
      paragraph = "Usuario y/o contraseña incorrectos. Intente nuevamente";
    } else {
      title = "Sesión anterior abierta";
      paragraph =
        "Hemos detectado que ya hay una sesion iniciada con este usuario en otro dispositivo. \n¿Desea eliminar esa sesion para iniciar una nueva aquí?";
    }

    if (this.props.error || this.props.sesionExist) {
      return (
        <Dialog visible>
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Content>
            <Paragraph>{paragraph}</Paragraph>
          </Dialog.Content>
          {this.props.error ? (
            <Dialog.Actions>
              <Button onPress={() => this.props.removeError()} color="#1f98a6">
                Aceptar
              </Button>
            </Dialog.Actions>
          ) : (
            <Dialog.Actions>
              <Button
                onPress={() => this.props.loginAndRemoveExistSesion()}
                color="#1f98a6"
              >
                Cancelar
              </Button>
              <Button
                onPress={() => this.props.unsetPreviousSesion()}
                color="#1f98a6"
              >
                Aceptar
              </Button>
            </Dialog.Actions>
          )}
        </Dialog>
      );
    }

    return null;
  }
}

function mapStateToProps(state) {
  return {
    error: state.reducerSession.error,
    sesionExist: state.reducerSession.sesionExist
  };
}

const mapDispatchToProps = (dispatch) => ({
  removeError: () => {
    dispatch({ type: "UNSET_ERROR_SESSION" });
  },
  unsetPreviousSesion: () => {
    dispatch({ type: "REMOVE_EXIST_SESION" });
  },
  loginAndRemoveExistSesion: () => {
    dispatch({ type: "UNSET_PREVIOUS_SESSION" });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorModalLogin);
