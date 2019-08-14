import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, Image } from "react-native";
import { Button } from "react-native-paper";
import Modal from "react-native-modal";

// const uri = "https://img.icons8.com/cotton/2x/businessman.png";
// const uri =
//   "http://www.myiconfinder.com/uploads/iconsets/256-256-4a2f091a9bacd2a250a30a78af4ca046-businessman.png";

// const uri = "https://static.thenounproject.com/png/18660-200.png"; //corbata

// const uri = "https://www.lemonthree.mx/web/MGX/img/Iconos/businessman.png";

// http://www.myiconfinder.com/uploads/iconsets/256-256-bc5bc94028aad33b071cad66f89f9270-businessman.png
//http://www.myiconfinder.com/uploads/iconsets/256-256-ad3905d8461a23c8bf69a07c4becf8a2-business.png
//"https://www.pngrepo.com/download/213522/accessory-businessman.png" //corbata 2

const uri = "https://static.thenounproject.com/png/18660-200.png";

class ModalChooseClient extends Component {
  render() {
    if (this.props.modalChooseCliente) {
      return (
        <Modal
          isVisible
          swipeDirection={["up", "down", "right", "left"]}
          animationIn="tada"
          onSwipeComplete={() => {
            //this.setState({ counter: 1 });
            this.props.hideModal();
            this.props.removeChooseClient();
          }}
          style={{ borderRadius: 500 }}
        >
          <View
            style={{
              backgroundColor: "#f6f6f6",
              marginVertical: 150,
              borderRadius: 10
            }}
          >
            <View style={{ marginVertical: 10, marginLeft: 15 }}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ justifyContent: "center" }}>
                  <Image
                    style={{ width: 100, height: 100, resizeMode: "contain" }}
                    source={{
                      uri
                    }}
                  />
                </View>
                <View style={{ marginHorizontal: 10, flex: 2 }}>
                  <View
                    style={{
                      backgroundColor: "#dfdfe2",
                      paddingHorizontal: 2,
                      paddingVertical: 2,
                      alignItems: "center",
                      borderRadius: 10
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "500"
                      }}
                    >
                      {this.props.chooseClient.cliente.razonSocial}
                    </Text>
                  </View>
                  <View style={{ marginVertical: 10 }}>
                    <Text
                      style={{
                        borderBottomWidth: 1,
                        borderBottomColor: "#b5b5b5",
                        fontStyle: "italic"
                      }}
                    >
                      CUIT: {this.props.chooseClient.cliente.CUIT}
                    </Text>
                    <Text
                      style={{
                        borderBottomWidth: 1,
                        borderBottomColor: "#b5b5b5",
                        fontStyle: "italic"
                      }}
                    >
                      DOMICILIO: {this.props.chooseClient.cliente.domicilio}
                    </Text>
                    <Text
                      style={{
                        borderBottomWidth: 1,
                        borderBottomColor: "#b5b5b5",
                        fontStyle: "italic"
                      }}
                    >
                      TELEFONO:{" "}
                      {this.props.chooseClient.cliente.telefonoContacto}
                    </Text>
                    <Text
                      style={{
                        borderBottomWidth: 1,
                        borderBottomColor: "#b5b5b5",
                        fontStyle: "italic"
                      }}
                    >
                      CONTACTO:{" "}
                      {this.props.chooseClient.cliente.correoElectronico}
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <Button
              style={{
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopRightRadius: 0,
                borderTopLeftRadius: 0
              }}
              color="rgb(49, 186, 201)"
              mode="contained"
              onPress={() => {
                this.props.hideModal();
                this.props.continuar();
              }}
            >
              <Text style={{ color: "white", fontSize: 18 }}>CONTINUAR</Text>
            </Button>
          </View>
        </Modal>
      );
    }
    return null;
  }
}

function mapStateToProps(state) {
  return {
    chooseClient: state.reducerVenta.chooseClient,
    modalChooseCliente: state.reducerVenta.modalChooseCliente
  };
}

const mapDispatchToProps = dispatch => {
  return {
    removeChooseClient: () => {
      dispatch({ type: "REMOVE_CHOOSE_CLIENT" });
    },
    hideModal: () => {
      dispatch({ type: "HIDE_CHOOSE_CLIENT_MODAL" });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalChooseClient);
