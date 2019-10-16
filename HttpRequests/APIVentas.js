import axios from "react-native-axios";
import CONSTANTES from "../Componentes/GlobalUtils/CONSTANTES";

const BASE_API = CONSTANTES.api;

const configAxios = (token) => {
  axios.defaults.baseURL = BASE_API;
  axios.defaults.headers["Content-Type"] = "application/json";
  axios.defaults.headers.Accept = "application/json";
  axios.defaults.headers.Authorization = `Token ${token}`;
};

class APIVentas {
  postVentaMinorista = async (json) => {
    return axios
      .post("/venta/minorista/", json)
      .then(async (res) => {
        const response = await res;
        return response;
      })
      .catch((error) => {
        console.log("Error: ", error.response);
        return error.response;
      });
  };

  postVentaMayorista = async (json) => {
    return axios
      .post("/venta/mayorista/", json)
      .then(async (res) => {
        const response = await res;
        return response;
      })
      .catch((error) => {
        console.log("Error: ", error.response);
        return error.response;
      });
  };

  ventaMinorista = async (json, token) => {
    configAxios(token);
    const response = await this.postVentaMinorista(json);

    const status = response.status.toString();
    if (status.substring(0, 1) === "2") {
      return true;
    } else {
      return false;
    }
  };

  ventaMayorista = async (json, token) => {
    configAxios(token);
    const response = await this.postVentaMayorista(json);

    const status = response.status.toString();
    if (status.substring(0, 1) === "2") {
      return true;
    } else {
      return false;
    }
  };
}

export default new APIVentas();
