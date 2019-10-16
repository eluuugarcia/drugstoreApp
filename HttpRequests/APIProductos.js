import axios from "react-native-axios";
import CONSTANTES from "../Componentes/GlobalUtils/CONSTANTES";

const BASE_API = CONSTANTES.api;

const configAxios = (token) => {
  axios.defaults.baseURL = BASE_API;
  axios.defaults.headers["Content-Type"] = "application/json";
  axios.defaults.headers.Accept = "application/json";
  axios.defaults.headers.Authorization = `Token ${token}`;
};

class APIProductos {
  getTipoProductos = async () => {
    return axios
      .get("/producto/tipoProducto/")
      .then(async (res) => {
        const tiposProductos = await res.data;
        return tiposProductos;
      })
      .catch((error) => error);
  };

  getMarcas = async () => {
    return axios
      .get("/producto/marca/")
      .then(async (res) => {
        const marcas = await res.data;
        return marcas;
      })
      .catch((error) => error);
  };

  getProveedores = async () => {
    // configAxios(token);
    return axios
      .get("/proveedor/")
      .then(async (res) => {
        const proveedores = await res.data;
        return proveedores;
      })
      .catch((error) => error);
  };

  postProducto = async (producto, token) => {
    configAxios(token);
    return axios
      .post("/sucursal/producto/", producto)
      .then(async (res) => {
        const response = await res;
        return response;
      })
      .catch((error) => {
        console.log("Error: ", error.response);
        return error.response;
      });
  };

  addNewProducto = async (producto, token) => {
    const response = await this.postProducto(producto, token);
    console.log("response");
    console.log(response.status);
    const status = response.status.toString();
    if (status.substring(0, 1) === "2") {
      console.log("hi");
      return true;
    } else {
      return false;
    }
  };

  validateBarCode = async (token, barcode) => {
    configAxios(token);
    return axios
      .get(`/producto/existe/${barcode}`)
      .then(async (res) => {
        const response = await res.data;

        if (!response.existeEnSucursal) {
          proveedores = await this.getProveedores();
          marcas = await this.getMarcas();
          tipoProductos = await this.getTipoProductos();
        } else {
          proveedores = [];
          marcas = [];
          tipoProductos = [];
        }

        if (response.existeProducto) {
          newProduct = {
            ...response.producto[0],
            existeEnSucursal: response.existeEnSucursal,
            existeProducto: response.existeProducto
          };
        } else {
          newProduct = {
            existeEnSucursal: response.existeEnSucursal,
            existeProducto: response.existeProducto
          };
        }

        newProduct.idProducto = barcode;

        return {
          newProduct,
          proveedores,
          marcas,
          tipoProductos
        };
      })
      .catch((error) => console.log(error));
  };
}

export default new APIProductos();
