import {
  takeEvery,
  call,
  select,
  put,
  all,
  fork,
  take,
  takeLatest
} from "redux-saga/effects";
import axios from "react-native-axios";
import { Alert } from "react-native";
import CONSTANTES from "../Componentes/GlobalUtils/CONSTANTES";

// Configuracion de axios:
// baseURL es la url general
const configAxios = () => {
  axios.defaults.baseURL = CONSTANTES.api;
  axios.defaults.headers["Content-Type"] = "application/json";
  axios.defaults.headers.Accept = "application/json";
};

// Funciones llamadas desde las sagas:
const login = ({ user, password }) => {
  configAxios();
  axios.defaults.headers.Authorization = null;
  return axios
    .post("/usuario/login/", {
      username: user,
      password
    })
    .then(async (res) => {
      const response = await res;
      const { token } = response.data;

      axios.defaults.headers.Authorization = `Token ${token}`;

      return response;
    })
    .catch((error) => {
      console.log("Error: ", error.response);
      return error.response;
    });
};

const logout = (token) => {
  axios.defaults.headers.Authorization = `Token ${token}`;
  configAxios();
  return axios
    .post("/usuario/logout/", {
      token
    })
    .then(async (res) => {
      const response = await res;

      return response;
    })
    .catch((error) => {
      console.log("Error: ");
      console.log(error);
      return error;
    });
};

const iniciarTurno = (token) => {
  configAxios();
  axios.defaults.headers.Authorization = `Token ${token}`;
  configAxios();
  return axios
    .post("/usuario/iniciarTurno/")
    .then(async (res) => {
      const response = await res;
      return response;
    })
    .catch((error) => {
      console.log("Error: ", error.response);
      return error.response;
    });
};

const getProductos = async (token) => {
  axios.defaults.headers.Authorization = `Token ${token}`;
  configAxios();
  return axios
    .get("/sucursal/producto/")
    .then(async (res) => {
      const productos = await res.data;
      return productos;
    })
    .catch((error) => error);
};

const getClientes = (token) => {
  axios.defaults.headers.Authorization = `Token ${token}`;
  configAxios();
  return axios
    .get("/sucursal/clienteDeSucursal/")
    .then(async (res) => {
      const clientes = await res.data;
      return clientes;
    })
    .catch((error) => error);
};

const getTipoProductos = async (token) => {
  axios.defaults.headers.Authorization = `Token ${token}`;
  configAxios();
  return axios
    .get("/producto/tipoProducto/")
    .then(async (res) => {
      const tiposProductos = await res.data;
      return tiposProductos;
    })
    .catch((error) => error);
};

const getMarcas = (token) => {
  axios.defaults.headers.Authorization = `Token ${token}`;
  configAxios();
  return axios
    .get("/producto/marca/")
    .then(async (res) => {
      const marcas = await res.data;
      return marcas;
    })
    .catch((error) => error);
};

const getProveedores = (token) => {
  axios.defaults.headers.Authorization = `Token ${token}`;
  configAxios();
  return axios
    .get("/proveedor/")
    .then(async (res) => {
      const proveedores = await res.data;
      return proveedores;
    })
    .catch((error) => error);
};

// Sagas:
function* sagaLogin(values) {
  try {
    const response = yield call(login, values.loginValues);
    yield put({ type: "UNSET_LOADING" });

    switch (response.status) {
      case 201:
        const { token } = response.data;
        const responseTurno = yield call(iniciarTurno, token);
        if (responseTurno.status === 201) {
          yield put({ type: "SET_SESSION", token });
        }
        break;
      case 403:
        const oldToken = response.data;
        yield put({ type: "SET_PREVIOUS_SESSION_EXIST", oldToken });
        break;
      default:
        yield put({ type: "SET_ERROR_SESSION" });
        break;
    }
  } catch (error) {
    console.log(error);
  }
}

function* sagaLogout() {
  try {
    const { token } = yield select((state) => state.reducerSession);
    const response = yield call(logout, token);
    if (response.status === 201) {
      axios.defaults.headers.Authorization = "";
      yield put({ type: "UNSET_SESSION" });
    }
  } catch (error) {
    console.log(error);
  }
}

function* sagaRemovePreviousSession() {
  try {
    yield put({ type: "SET_LOADING" });
    const { previousToken } = yield select((state) => state.reducerSession);
    const response = yield call(logout, previousToken);
    if (response.status === 201) {
      yield put({ type: "UNSET_ERROR_SESSION" });
      const user = yield select((state) => state.form.LoginForm.values.user);
      const password = yield select(
        (state) => state.form.LoginForm.values.password
      );
      const loginValues = {
        user,
        password
      };
      const values = {
        loginValues
      };
      yield* sagaLogin(values);
    }
  } catch (error) {
    console.log(error);
  }
}

function* sagaGetProductos() {
  try {
    const { token } = yield select((state) => state.reducerSession);

    const productos = yield call(getProductos, token);
    console.log("product");
    console.log(productos);
    yield put({ type: "CARGAR_PRODUCTOS", productos });
  } catch (error) {
    console.log(error);
  }
}

function* sagaGetClientes() {
  try {
    const { token } = yield select((state) => state.reducerSession);
    const clientes = yield call(getClientes, token);
    yield put({ type: "CARGAR_CLIENTES", clientes });
  } catch (error) {
    console.log(error);
  }
}

function* sagaGetTiposProductos() {
  try {
    const { token } = yield select((state) => state.reducerSession);
    const tipoProductos = yield call(getTipoProductos, token);
    yield put({ type: "CARGAR_TIPOS_PRODUCTOS", tipoProductos });
  } catch (error) {
    console.log(error);
  }
}

function* sagaGetMarcas() {
  try {
    const { token } = yield select((state) => state.reducerSession);
    const marcas = yield call(getMarcas, token);
    yield put({ type: "CARGAR_MARCAS", marcas });
  } catch (error) {
    console.log(error);
  }
}

function* sagaGetProveedores() {
  try {
    const { token } = yield select((state) => state.reducerSession);
    const proveedores = yield call(getProveedores, token);
    yield put({ type: "CARGAR_PROVEEDORES", proveedores });
  } catch (error) {
    console.log(error);
  }
}

const validateBarcode = (token, barcode) => {
  axios.defaults.headers.Authorization = `Token ${token}`;
  configAxios();

  return axios
    .get(`/producto/existe/${barcode}`)
    .then(async (res) => {
      // console.log('Success: ');
      const response = await res.data;
      return response;
    })
    .catch((error) => error);
};

function* sagaValidateBarcode({ barcode }) {
  yield put({ type: "SET_LOADING" });
  try {
    const { token } = yield select((state) => state.reducerSession);
    const response = yield call(validateBarcode, token, barcode);
    if (!response.existeEnSucursal) {
      console.log("no existe en sucursal");
      const proveedores = yield call(getProveedores, token);
      const marcas = yield call(getMarcas, token);
      const tipoProductos = yield call(getTipoProductos, token);
      response.proveedores = proveedores;
      response.marcas = marcas;
      response.tipoProductos = tipoProductos;
    }

    response.barcode = barcode;

    yield put({ type: "SET_NEW_PRODUCT", response });
    yield put({ type: "UNSET_LOADING" });
  } catch (error) {
    console.log(error);
    yield put({ type: "UNSET_LOADING" });
  }
}

export default function* primaryFunction() {
  yield takeEvery("LOGIN", sagaLogin);
  yield takeEvery("LOGOUT", sagaLogout);
  yield takeEvery("REMOVE_EXIST_SESION", sagaRemovePreviousSession);
  yield takeEvery("GET_PRODUCTOS", sagaGetProductos);
  yield takeEvery("GET_CLIENTES", sagaGetClientes);
  yield takeEvery("GET_TIPOS_PRODUCTOS", sagaGetTiposProductos);
  yield takeEvery("GET_MARCAS", sagaGetMarcas);
  yield takeEvery("GET_PROVEEDORES", sagaGetProveedores);
  yield takeEvery("VALIDATE_BARCODE", sagaValidateBarcode);
}
