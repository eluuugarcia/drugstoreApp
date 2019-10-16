// import liraries
import React, { useState } from "react";
import { View, Text, Image, KeyboardAvoidingView } from "react-native";
import { Field, reduxForm } from "redux-form";
import { Fab } from "native-base";
import PickerModal from "react-native-picker-modal-view";
import { TextInput, Button } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

const field = (props) => {
  console.log(props.input.name);
  if (props.input.theProp) {
    console.log("hay the prop");
  }
  console.log(props.input.value);
  return (
    <View style={{ marginBottom: 15 }}>
      <TextInput
        required={props.input.name !== "descripcion"}
        label={props.label}
        placeholder={props.ph}
        mode="outlined"
        value={props.input.value}
        keyboardType={
          props.input.name === "descripcion" || props.input.name === "nombre"
            ? "default"
            : "numeric"
        }
        numberOfLines={props.input.name === "description" ? 3 : 1}
        multiline={!!(props.input.name === "description")}
        disabled={props.disabled}
        error={props.meta.touched && props.meta.error}
        onChangeText={props.input.onChange}
        onBlur={props.input.onBlur}
      />
    </View>
  );
};

const selectField = (props) => (
  <View style={{ marginBottom: 15 }}>
    <PickerModal
      requireSelection
      items={props.data}
      showToTopButton
      selected={props.selected}
      disabled={props.data.length === 1}
      showAlphabeticalIndex
      autoGenerateAlphabeticalIndex
      selectPlaceholderText={props.ph}
      searchPlaceholderText={props.searchText}
      onSelected={props.onSelected}
    />
  </View>
);

const validate = (values) => {
  console.log("las values!");
  console.log(values);
  const errors = {};
  if (!values.nombre) {
    errors.nombre = true;
  } else if (values.nombre.trim() === "") {
    errors.nombre = true;
  }
  if (
    !values.precioVentaMayorista ||
    isNaN(Number(values.precioVentaMayorista))
  ) {
    errors.precioVentaMayorista = true;
  } else if (
    values.precioVentaMayorista < 0 ||
    values.precioVentaMayorista.trim() === ""
  ) {
    errors.precioVentaMayorista = true;
  }
  if (
    !values.precioVentaMinorista ||
    isNaN(Number(values.precioVentaMinorista))
  ) {
    errors.precioVentaMinorista = true;
  } else if (
    values.precioVentaMinorista < 0 ||
    values.precioVentaMinorista.trim() === ""
  ) {
    errors.precioVentaMinorista = true;
  }
  if (!values.cantidad || isNaN(Number(values.cantidad))) {
    errors.cantidad = true;
  } else if (values.cantidad < 0 || values.cantidad.trim() === "") {
    errors.cantidad = true;
  }

  return errors;
};

const validatePickers = (proveedor, marca, tipoProducto) => {
  if (proveedor === null || marca === null || tipoProducto === null) {
    return true;
  }
  return false;
};

function AddProductForm(props) {
  const { invalid } = props;
  const [proveedor, setProveedor] = useState(null);
  const [marca, setMarca] = useState(null);
  const [tipoProducto, setTipoProducto] = useState(null);
  const [invalidPickers, setInvalidPickers] = useState(true);

  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled
      keyboardVerticalOffset={200}
    >
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <Field
          name="nombre"
          label={
            props.newProduct && props.newProduct.nombre
              ? props.newProduct.nombre
              : "Nombre del producto"
          }
          component={field}
          ph="Nombre"
          disabled={!!(props.newProduct && props.newProduct.nombre)}
          theProp="holis"
          value={
            props.newProduct && props.newProduct.nombre
              ? props.newProduct.nombre
              : "nooo"
          }
        />
        <Field
          name="descripcion"
          label={
            props.newProduct.descripcion
              ? props.newProduct.descripcion
              : "Descripción"
          }
          component={field}
          ph="Descripción del producto"
          disabled={props.newProduct.descripcion === ""}
          value={
            props.newProduct.descripcion ? props.newProduct.descripcion : null
          }
        />
        <Field
          name="typeProduct"
          label="Tipo de producto..."
          component={selectField}
          ph="Tipo de producto..."
          searchText="Buscar un tipo..."
          data={props.tipoProductos}
          selected={
            props.tipoProductos.length === 1
              ? props.tipoProductos[0]
              : tipoProducto
          }
          onSelected={(tipo) => {
            setTipoProducto(tipo);
            setInvalidPickers(validatePickers(proveedor, marca, tipoProducto));
            props.setTipoProducto(tipo);
          }}
        />
        <Field
          name="marca"
          label="Marca..."
          component={selectField}
          ph="Marca..."
          searchText="Buscar marca..."
          data={props.marcas}
          selected={props.marcas.length === 1 ? props.marcas[0] : marca}
          onSelected={(marca) => {
            setMarca(marca);
            setInvalidPickers(validatePickers(proveedor, marca, tipoProducto));
            props.setMarca(marca);
          }}
        />
        <Field
          name="proveedor"
          label="Proveedor..."
          component={selectField}
          ph="Proveedor..."
          searchText="Buscar proveedor..."
          data={props.proveedores}
          selected={
            props.proveedores.length === 1 ? props.proveedores[0] : proveedor
          }
          onSelected={(proveedor) => {
            setProveedor(proveedor);
            setInvalidPickers(validatePickers(proveedor, marca, tipoProducto));
            props.setProv(proveedor);
          }}
        />

        <View
          style={{
            flexDirection: "row",
            flex: 1,
            alignItems: "space-between"
          }}
        >
          <View style={{ flex: 0.5, marginRight: 10 }}>
            <Field
              name="precioVentaMayorista"
              label="Precio mayorista"
              component={field}
              ph="Ej: 110.50"
            />
          </View>
          <View style={{ flex: 0.5, marginLeft: 10 }}>
            <Field
              name="precioVentaMinorista"
              label="Precio minorista"
              component={field}
              ph="Ej: 180.50"
            />
          </View>
        </View>
        <Field
          name="cantidadContiene"
          label="Cantidad en stock actual"
          component={field}
          ph="Ej: 50"
        />
        <View style={{ flexDirection: "row-reverse", paddingVertical: 10 }}>
          <View style={{ flex: 0.45 }}>
            <Button
              uppercase={false}
              mode="contained"
              style={
                invalid || invalidPickers
                  ? { backgroundColor: "grey" }
                  : { backgroundColor: "#5d357c" }
              }
              disabled={invalid || invalidPickers}
              onPress={props.handleSubmit(props.createNewProduct)}
            >
              Agregar producto
            </Button>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default reduxForm({ form: "AddProductForm", validate })(AddProductForm);
