// import liraries
import React from "react";
import { View, Text, Image } from "react-native";
import { Field, reduxForm } from "redux-form";
import { Button } from "react-native-paper";
import { LinearGradient } from "expo";
import { Fab } from "native-base";

import { Picker, TextField, Modal } from "react-native-ui-lib";
import { AntDesign, FontAwesome, Entypo } from "@expo/vector-icons";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";

const field = props => {
  return (
    <View>
      <TextField
        floatingPlaceholder
        floatingPlaceholderColor="#800080"
        placeholder={props.ph}
        onChangeText={props.input.onChange}
        value={props.input.value}
        underlineColor={{ focus: "#800080", error: "grey" }}
        style={{ color: "black" }}
        keyboardType={props.input.name === "barcode" ? "numeric" : "default"}
        //onBlur={() => console.log("dejo de de escribir!!")}
        //onSubmitEditing={e => console.log(e)}

        onBlur={props.input.onBlur}
      />
    </View>
  );
};

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Ingrese un nombre";
  }

  if (values.precio) {
    console.log("PRECIO MAL");
    errors.precio = "Ingrese un precio";
  }

  return errors;
};

function AddProductForm(props) {
  const { invalid } = props;
  let color1 = "#afafaf";
  let color2 = "#afafaf";
  if (invalid) {
    color1 = "#7575753b";
    color2 = "#7575753b";
  } else {
    color1 = "#77309b";
    color2 = "#ad55c4";
  }

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
          cellStyle={{
            borderBottomWidth: 2,
            borderColor: "gray"
          }}
          cellStyleFocused={{
            borderColor: "black"
          }}
          codeLength={11}
          cellSpacing={5}
          cellSize={22}
          autoFocus
          restrictToNumbers
          //value={code}
          //onTextChange={code => this.setState({ code })}
        />
        <Fab
          disabled={validate}
          style={{ backgroundColor: "#ef6e73" }}
          position="bottomRight"
          onPress={props.handleSubmit(props.validateBarcode)}
        >
          <Entypo name="chevron-right" />
        </Fab>
      </View>
    </View>
  );
}

export default reduxForm({ form: "AddProductForm", validate })(AddProductForm);
