import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { Button } from "react-native-paper";
import Modal from "react-native-modal";
import { TextInput } from "react-native-paper";
// import { Input } from "react-native-elements";

import { Ionicons } from "@expo/vector-icons";

const PagoModal = (props) => {
  const [monto, setMonto] = useState("");
  const [saldoAFavor, setSaldoAFavor] = useState(null);

  const changeText = ({ text }) => {
    let sinPeso = text.slice(1, text.length);
    const lastCharacter = text[text.length - 1];
    if (
      !isNaN(Number(lastCharacter)) &&
      lastCharacter.trim().length > 0 &&
      (lastCharacter !== "0" ||
        (sinPeso[sinPeso.length - 2] != undefined && lastCharacter === "0"))
    ) {
      setMonto(sinPeso);
      if (sinPeso > props.total) {
        setSaldoAFavor(sinPeso - props.total);
      } else {
        setSaldoAFavor(null);
      }
    } else if (sinPeso.trim().length === 0) {
      setMonto("");
      setSaldoAFavor(null);
    }
  };

  if (props.show) {
    return (
      <Modal
        isVisible
        swipeDirection={["up", "down", "right", "left"]}
        animationIn="tada"
        onSwipeComplete={() => {
          props.hide();
        }}
        style={{ borderRadius: 500 }}
      >
        <View style={{ backgroundColor: "#f6f6f6", marginVertical: 150 }}>
          <View style={{ marginVertical: 10, marginHorizontal: 25 }}>
            <View style={{ marginBottom: 10 }}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  color: "rgb(130, 130, 130)"
                }}
              >
                Ingrese el monto a entregar
              </Text>
              <Text style={{ color: "#b2b2b2" }}>
                Medio de pago: {props.medioPago.nombre}
              </Text>
            </View>

            <View
              style={{
                // flexDirection: "row",
                // justifyContent: "space-between",
                // alignItems: "center",
                paddingVertical: 6
                // marginRight: 40
                // backgroundColor: "red"
              }}
            >
              <TextInput
                // placeholder="Ingrese el monto a entregar"
                label={"Total: $" + props.total}
                onChangeText={(text) => changeText({ text })}
                value={"$" + monto}
                // placeholder={"Total: $" + props.total}
                keyboardType="numeric"
              />

              {saldoAFavor ? (
                <View
                  style={{
                    marginTop: 20,
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <Ionicons
                    size={26}
                    color="#8031a7"
                    name="md-add-circle"
                    style={{ marginRight: 8 }}
                  ></Ionicons>

                  <Text
                    style={{ color: "rgb(130, 130, 130)", fontWeight: "500" }}
                  >
                    Saldo a favor del cliente: ${saldoAFavor}{" "}
                  </Text>
                </View>
              ) : null}
            </View>
          </View>

          <Button
            style={{ borderRadius: 0 }}
            color="rgb(49, 186, 201)"
            mode="contained"
            disabled={monto && monto > props.total ? false : true}
            onPress={() => props.confirmarVenta(monto)}
          >
            <Text style={{ color: "white", fontSize: 22 }}>
              Confirmar venta
            </Text>
          </Button>
        </View>
      </Modal>
    );
  } else {
    return null;
  }
};

export default PagoModal;
