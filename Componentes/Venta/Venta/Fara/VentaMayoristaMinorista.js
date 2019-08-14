import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import OptionMayoristaMinorista from "./OptionMayoristaMinorista";

function VentaMayoristaMinorista(props) {
  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <View
        style={{
          flex: 1.5,
          marginHorizontal: 20,
          marginTop: 20,
          paddingHorizontal: 20,
          justifyContent: "center",
          // paddingVertical: 10,
          backgroundColor: "#91b7d6",
          borderRadius: 20,
          // marginTop: 20,
          borderWidth: 1,
          borderColor: "#707070"
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "500" }}>Nueva venta:</Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "200",
            fontStyle: "italic",
            color: "#5b5b5b"
          }}
        >
          Tipo de venta
        </Text>
      </View>

      <View
        style={{
          flex: 6,
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginVertical: 20,
          //backgroundColor: "#fff",
          paddingVertical: 20,
          borderRadius: 20,

          marginHorizontal: 20
        }}
      >
        {/* mayorista */}

        <OptionMayoristaMinorista
          title="Mayorista"
          desc="Más de 100 u"
          mayorista={true}
          backgroundColor="#BFC0DB"
          onClick={props.goToVentaMayorista}
        />
        <OptionMayoristaMinorista
          title="Minorista"
          desc="Menos de 100 u"
          mayorista={false}
          backgroundColor="#CCBFE0"
          onClick={props.goToVentaMinorista}
        />
      </View>
    </View>
  );
}

export default VentaMayoristaMinorista;
