import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Image, Text } from "react-native";
import {
  Button,
  Paragraph,
  Dialog,
  Title,
  Caption,
  Headline,
  Subheading
} from "react-native-paper";
import THEME from "./THEME";

class ErrorsModal extends Component {
  render() {
    const imgError = THEME.imgError;

    return (
      <Dialog visible={this.props.showError}>
        <Dialog.Content>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              style={{
                width: 150,
                height: 150,
                marginVertical: 10,
                marginBottom: 20,

                resizeMode: "center"
              }}
              source={{ uri: imgError }}
            ></Image>
            <Title
              style={{
                fontWeight: "700",
                color: "rgba(51, 31, 73, 0.9)"
              }}
            >
              {this.props.titleError}
            </Title>
            <Caption
              style={{
                textAlign: "center",
                fontSize: 15,
                marginTop: 15,
                fontWeight: "700"
              }}
            >
              {this.props.textError}
            </Caption>
          </View>
        </Dialog.Content>

        <Dialog.Actions>
          <Button
            onPress={() => {
              this.props.removeError();
            }}
            color="#8961a7"
          >
            Aceptar
          </Button>
        </Dialog.Actions>
      </Dialog>
    );
  }
}

function mapStateToProps(state) {
  return {
    showError: state.reducerErrors.showError,
    textError: state.reducerErrors.textError,
    titleError: state.reducerErrors.titleError,
    showCancelar: state.reducerErrors.showCancelar,
    onPress: state.reducerErrors.onPress
  };
}

const mapDispatchToProps = (dispatch) => ({
  removeError: () => {
    dispatch({ type: "UNSET_ERROR" });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorsModal);
