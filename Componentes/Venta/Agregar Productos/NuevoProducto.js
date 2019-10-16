import React, { Component } from "react";
import { Text, View } from "react-native";
import AddProductForm from "./addProduct-form";
import { connect } from "react-redux";
import APIProductos from "../../../HttpRequests/APIProductos";
import CONSTANTES from "../../GlobalUtils/CONSTANTES";
import TopBar from "../../GlobalUtils/TopBar";

class NuevoProducto extends Component {
  state = {
    newProduct: null,
    proveedores: [],
    marcas: [],
    tipoProductos: [],
    selectedProv: null,
    selectedMarca: null,
    selectedTipo: null,
    barcode: null
  };

  componentDidUpdate = () => {
    const { navigation } = this.props;
    if (this.props.goToInicio) {
      navigation.navigate("Inicio");
      this.props.unsetGoToInicio();
    }
  };

  async createNewProduct(values, navigation) {
    const newProduct = values;
    newProduct.idMarca = this.state.selectedMarca.Id;
    newProduct.idTipo = this.state.selectedTipo.Id;
    newProduct.proveedores = [
      { idProveedor: this.state.selectedProv.Id, precio: 0 }
    ];
    newProduct.idProducto = this.state.barcode;
    const response = await APIProductos.addNewProducto(
      newProduct,
      this.props.token
    );
    if (response) {
      this.props.showAnimation();
      setTimeout(() => {
        this.props.hideAnimation();
        navigation.navigate("Inicio");
      }, 1600);
    } else {
      console.log("elseeee");
      this.props.setError();
    }
  }

  createTiposProductos(newProduct, tipos) {
    this.setState({ barcode: newProduct.idProducto });
    const arrayTipoProductos = [];
    if (newProduct.existeProducto) {
      const tipoP = {
        Name: newProduct.tipoProducto.nombre,
        Value: newProduct.tipoProducto.nombre,
        Id: newProduct.tipoProducto.idTipoProducto
      };
      arrayTipoProductos.push(tipoP);
    } else {
      tipos.forEach((tipo) => {
        const tipoP = {
          Name: tipo.nombre,
          Value: tipo.nombre,
          Id: tipo.idTipoProducto
        };

        arrayTipoProductos.push(tipoP);
      });
    }
    return arrayTipoProductos;
  }

  createMarcas(newProduct, marcas) {
    const arrayMarcas = [];
    if (newProduct.existeProducto) {
      const marca = {
        Name: newProduct.marca.nombre,
        Value: newProduct.marca.nombre,
        Id: newProduct.marca.idMarca
      };
      arrayMarcas.push(marca);
    } else {
      marcas.forEach((m) => {
        const marca = {
          Name: m.nombre,
          Value: m.nombre,
          Id: m.idMarca
        };

        arrayMarcas.push(marca);
      });
    }
    return arrayMarcas;
  }

  createProveedores(proveedores) {
    const arrayProveedores = [];

    proveedores.forEach((p) => {
      const proveedor = {
        Name: p.razonSocial,
        Value: p.CUIT,
        Id: p.idProveedor
      };

      arrayProveedores.push(proveedor);
    });

    return arrayProveedores;
  }

  async componentDidMount() {
    const barcode = this.props.navigation.getParam("barcode");
    const {
      newProduct,
      proveedores,
      marcas,
      tipoProductos
    } = await APIProductos.validateBarCode(this.props.token, barcode);

    const tipos = this.createTiposProductos(newProduct, tipoProductos);
    const marcs = this.createMarcas(newProduct, marcas);
    const provs = this.createProveedores(proveedores);

    if (newProduct.descripcion === null) {
      newProduct.descripcion = "";
    }

    await this.setState({
      marcas: marcs,
      tipoProductos: tipos,
      proveedores: provs,
      newProduct
    });
    this.props.unsetLoading();
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <TopBar
          title="Agregar producto"
          goBack={() => navigation.goBack()}
        ></TopBar>

        <View
          style={{
            flex: 1,

            marginVertical: 20
          }}
        >
          <View style={{}}>
            {!this.props.loading ? (
              <AddProductForm
                newProduct={this.state.newProduct}
                tipoProductos={this.state.tipoProductos}
                marcas={this.state.marcas}
                proveedores={this.state.proveedores}
                createNewProduct={(values) =>
                  this.createNewProduct(values, navigation)
                }
                setProv={(prov) => this.setState({ selectedProv: prov })}
                setMarca={(marca) => this.setState({ selectedMarca: marca })}
                setTipoProducto={(tipo) =>
                  this.setState({ selectedTipo: tipo })
                }
              />
            ) : null}
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  newProduct: state.reducerProductos.newProduct,
  yaExisteProducto: state.reducerProductos.yaExisteProducto,
  tipoProductos: state.reducerProductos.tipoProductos,
  marcas: state.reducerProductos.marcas,
  proveedores: state.reducerProductos.proveedores,
  loading: state.reducerLoading.loading,
  token: state.reducerSession.token,
  goToInicio: state.reducerErrors.goToInicio
});

const animation = CONSTANTES.newProductAdded;
const textError =
  "No se pudo crear el producto, comuniquese con el administrador.";
const titleError = "Oops! Ocurrió un error";
const error = {
  textError,
  titleError,
  showCancelar: false,
  goToInicio: true
};

const mapDispatchToProps = (dispatch) => ({
  unsetLoading: () => {
    dispatch({ type: "UNSET_LOADING" });
  },
  showAnimation: () => {
    dispatch({
      type: "SHOW_ANIMATION",
      animation,
      colorAnimation: "rgba(30, 34, 170, 1)",
      textAnimation: "Producto agregado correctamente"
    });
  },
  hideAnimation: () => {
    dispatch({ type: "HIDE_ANIMATION" });
  },
  setError: () => {
    dispatch({ type: "SET_ERROR", error });
  },
  unsetGoToInicio: () => {
    dispatch({ type: "UNSET_GO_TO_INICIO" });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NuevoProducto);
