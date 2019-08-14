import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, Image } from "react-native";
import Modal from "react-native-modal";
import { Button } from "react-native-paper";
import { AntDesign, Ionicons, Entypo } from "@expo/vector-icons";

const uri =
  "https://cdn4.iconfinder.com/data/icons/business-marketing-colors-set-1/91/Business_Marketing_56-512.png";

class ModalBarCodeNotFound extends Component {
  render() {
    if (this.props.barcodeNotFound) {
      return (
        <Modal
          isVisible
          swipeDirection={["up", "down", "right", "left"]}
          animationIn="tada"
          onSwipeComplete={() => {
            this.props.removeBarcodeNotFound();
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
            <View
              style={{
                marginVertical: 10
                // marginHorizontal: 25
              }}
            >
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  marginHorizontal: -10
                }}
              >
                <Ionicons
                  name="md-close"
                  color="#292929"
                  size={32}
                  style={{ marginHorizontal: 30 }}
                  onPress={() => {
                    this.props.removeBarcodeNotFound();
                  }}
                />
              </View>
              <View
                style={{
                  alignItems: "center",
                  marginVertical: 10,

                  marginHorizontal: 25
                }}
              >
                <Image
                  style={{
                    width: 120,
                    height: 120,
                    resizeMode: "contain",
                    opacity: 0.8
                  }}
                  source={{
                    uri
                  }}
                />
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "#4d4d4d",
                    textAlign: "center",
                    marginVertical: 10
                  }}
                >
                  OOPS!
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#4d4d4d",
                    textAlign: "center"
                  }}
                >
                  No encontramos un producto con ese código...
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#4d4d4d",
                    marginVertical: 20
                  }}
                >
                  ¿Te gustaría agregarlo?
                </Text>
                <Button
                  uppercase={false}
                  mode="contained"
                  style={{ backgroundColor: "#AB47BC" }}
                  //onPress={() => props.goToSearchProducts()}
                >
                  Nuevo producto
                </Button>
              </View>
            </View>
          </View>
        </Modal>
      );
    }

    return null;
  }
}

function mapStateToProps(state) {
  return {
    barcodeNotFound: state.reducerProductos.barcodeNotFound
  };
}

const mapDispatchToProps = dispatch => ({
  removeBarcodeNotFound: () => {
    dispatch({ type: "UNSET_BARCODE_NOT_FOUND" });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalBarCodeNotFound);
