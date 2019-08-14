// import liraries
import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  Text
} from "react-native";
import { Field, reduxForm } from "redux-form";
import { Input } from "galio-framework";
import { Button } from "react-native-elements";
import { LinearGradient } from "expo";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import { Picker, TextField, Modal } from "react-native-ui-lib";

const field = props => (
  <View style={{ marginBottom: 10 }}>
    <TextField
      floatingPlaceholder
      floatingPlaceholderColor="#800080"
      placeholder={props.ph}
      ref={r => (input = r)}
      underlineColor={{ focus: "#800080", error: "grey" }}
      multiline={!!(props.input.name === "description")}
      style={{ color: "black" }}
      keyboardType={props.input.name === "precio" ? "numeric" : "default"}
    />
    {/* <TextInput
      style={{ backgroundColor: "white" }}
      label={props.ph}
      value={props.input.value}
      mode="flat"
      onChangeText={props.input.onChange}
      multiline={!!(props.input.name === "description")}
    /> */}
  </View>
);

const validate = values => {
  const errors = {};

  if (!values.user) {
    errors.user = "Ingrese su usuario";
  }

  if (!values.password) {
    errors.password = "Ingrese su contraseña";
  }

  return errors;
};

function AddProductForm(props) {
  const { invalid } = props;
  let color1 = "grey";
  let color2 = "grey";
  if (invalid) {
    color1 = "#7575753b";
    color2 = "#7575753b";
  } else {
    color1 = "#77309b";
    color2 = "#ad55c4";
  }
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <KeyboardAvoidingView
        behavior="position"
        style={styles.container}
        onPress={Keyboard.dismiss}
        keyboardVerticalOffset={10}
      >
        <View
          style={{
            flex: 1,

            justifyContent: "space-between",
            marginBottom: 50
          }}
        >
          <Field name="name" component={field} ph="Nombre" icon="clipboard" />
          <Picker
            placeholder="Selecciona un tipo de producto"
            floatingPlaceholder
            floatingPlaceholderColor="#800080"
            //onChange={item => this.setState({language: item})}
            topBarProps={{ title: "Tipos de producto" }}
            style={{
              color: "black"
            }}
          >
            {props.tipoProductos.map(option => (
              <Picker.Item
                key={option.idTipoProducto}
                value={option.idTipoProducto}
                label={option.nombre}
              />
            ))}
          </Picker>
          <Field name="precio" component={field} ph="Precio" icon="dollar" />
          <Field
            name="description"
            component={field}
            ph="Descripción"
            icon="dollar"
          />
        </View>
        <View style={{}}>
          <Button
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: [color1, color2],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 }
            }}
            title="Agregar producto"
            disabled={invalid}
            disabledStyle={{
              backgroundColor: "#afaeae"
            }}
            disabledTitleStyle={{ color: "#4a4444" }}
            buttonStyle={{
              borderRadius: 80,
              width: 300
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
const styles = StyleSheet.create({
  fields: {
    flex: 1,
    backgroundColor: "red"
  },
  textInput: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#662584",
    marginVertical: 10
  },
  errors: {
    color: "#c32f29"
  },
  container: {
    flex: 1,
    justifyContent: "center"
  }
});

export default reduxForm({ form: "AddProductForm", validate })(AddProductForm);
