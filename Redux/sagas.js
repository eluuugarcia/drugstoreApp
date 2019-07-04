import {
  takeEvery,
  call,
  select,
  put,
  all,
  fork,
  take
} from "redux-saga/effects";
import axios from "react-native-axios";
import { Alert } from "react-native";

// Configuracion de axios:
// baseURL es la url general
const configAxios = () => {
  axios.defaults.baseURL = "http://07f63bf0.ngrok.io";
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
    .then(async res => {
      console.log("Success");
      const response = await res;
      const { token } = response.data;
      console.log(token);
      axios.defaults.headers.Authorization = `Token ${token}`;

      Alert.alert(
        "                Sesion Iniciada!",
        `Token: ${token}`,
        [{ text: "OK", onPress: () => console.log("OK") }],
        { cancelable: false }
      );
      return response;
    })
    .catch(error => {
      console.log("Error: ", error.response);
      return error.response;
    });
};

const logout = token => {
  axios.defaults.headers.Authorization = `Token ${token}`;
  configAxios();
  return axios
    .post("/usuario/logout/", {
      token
    })
    .then(async res => {
      const response = await res;
      return response;
    })
    .catch(error => {
      console.log("Error: ");
      console.log(error);
      return error;
    });
};

const getProductos = token => {
  axios.defaults.headers.Authorization = `Token ${token}`;
  configAxios();
  return axios
    .get("/sucursal/producto/")
    .then(async res => {
      // console.log('Success: ');
      const productos = await res.data;
      return productos;
    })
    .catch(error => error);
};

// Sagas:
function* sagaLogin(values) {
  try {
    const response = yield call(login, values.loginValues);
    yield put({ type: "UNSET_LOADING" });

    switch (response.status) {
      case 201:
        const { token } = response.data;
        yield put({ type: "SET_SESSION", token });
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
    const { token } = yield select(state => state.reducerSession);
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
    const { previousToken } = yield select(state => state.reducerSession);
    const response = yield call(logout, previousToken);
    if (response.status === 201) {
      yield put({ type: "UNSET_ERROR_SESSION" });
      const user = yield select(state => state.form.LoginForm.values.user);
      const password = yield select(
        state => state.form.LoginForm.values.password
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
    const { token } = yield select(state => state.reducerSession);
    console.log("el tokeeeeeen");
    console.log(token);
    const productos = yield call(getProductos, token);
    yield put({ type: "CARGAR_PRODUCTOS", productos });
  } catch (error) {
    console.log(error);
  }
}

export default function* primaryFunction() {
  yield takeEvery("LOGIN", sagaLogin);
  yield takeEvery("LOGOUT", sagaLogout);
  yield takeEvery("REMOVE_EXIST_SESION", sagaRemovePreviousSession);
  yield takeEvery("GET_PRODUCTOS", sagaGetProductos);
}
