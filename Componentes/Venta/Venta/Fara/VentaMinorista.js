import React from "react";
import { View, Image } from "react-native";
import VentaMinoristaOption from "./VentaMinoristaOption";

function VentaMinorista(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
        paddingVertical: 20,
        backgroundColor: "#EFE7E7"
      }}
    >
      <View style={{ flex: 1 }}>
        <VentaMinoristaOption
          text="Buscar"
          image={
            <Image
              style={{ width: 120, height: 120 }}
              source={require("../../../assets/icons8-google-web-search-100-2.png")}
            />
          }
        />
      </View>

      <View style={{ flex: 1 }}>
        <VentaMinoristaOption
          text="Escanear"
          image={
            <Image
              style={{ width: 120, height: 120 }}
              source={require("../../../assets/icons8-cÃ³digo-de-barras-100-4.png")}
            />
          }
        />
      </View>

      <View style={{ flex: 1 }}>
        <VentaMinoristaOption
          text="Agregar"
          image={
            <Image
              style={{ width: 120, height: 120 }}
              source={require("../../../assets/icons8-mÃ¡s-2-matemÃ¡ticas-100.png")}
            />
          }
        />
      </View>
    </View>
  );
}

export default VentaMinorista;
