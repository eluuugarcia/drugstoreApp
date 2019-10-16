// import liraries
import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { Fab } from "native-base";

import { Entypo } from "@expo/vector-icons";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";

const ValidateCode = (props) => {
  const { navigation } = props;
  const [code, setCode] = useState("");
  const [length, setLength] = useState(1);
  const [disabledButton, setDisabledButton] = useState(true);

  const onChangeCode = (c) => {
    // setLength(length + 1);
    if (c.length > 0) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
    setCode(c);

    if (c.length + 1 > length - 1) {
      setLength(length + 1);
    } else if (c.length + 1 <= length) {
      setLength(length - 1);
    }
  };
  return (
    <View
      style={{
        flex: 1
      }}
    >
      <View style={{ flex: 0.8, alignItems: "center", marginHorizontal: 10 }}>
        {/* <Field name="barcode" component={field} ph="Código" /> */}
        <Text
          style={{
            fontWeight: "400",
            textShadowColor: "rgba(96, 0, 95, 0.5)",
            textShadowOffset: {
              width: 0.4,
              height: 0.4
            },
            fontSize: 22,
            textShadowRadius: 2
          }}
        >
          Ingrese el código del producto:
        </Text>
        <Image
          style={{ height: 180, width: 180, marginVertical: 20 }}
          source={{
            uri:
              "https://cdn4.iconfinder.com/data/icons/business-marketing-colors-set-1/91/Business_Marketing_56-512.png"
          }}
        />
        <SmoothPinCodeInput
          //   ref={this.pinInput}
          value={code}
          autoFocus
          cellSize={20}
          keyboardType="phone-pad"
          cellSpacing={1.5}
          restrictToNumbers
          textStyle={{ color: "gray", fontSize: 22 }}
          codeLength={length}
          onTextChange={(code) => onChangeCode(code)}
          cellStyle={{
            borderBottomWidth: 2,
            borderColor: "gray"
          }}
          cellStyleFocused={{
            borderColor: "black"
          }}
        />

        <Fab
          disabled={disabledButton}
          style={{ backgroundColor: disabledButton ? "#9fa7ad" : "#80225f" }}
          position="bottomRight"
          onPress={() => {
            // props.validateBarcode(code);
            props.continue(code);
          }}
        >
          <Entypo name="chevron-right" />
        </Fab>
      </View>
    </View>
  );
};

export default ValidateCode;
