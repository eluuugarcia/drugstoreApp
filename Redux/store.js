import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as form } from "redux-form";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "remote-redux-devtools";
import primaryFunction from "./sagas";
import reducerSession from "./Reducers/Sesion/reducerSession";
import reducerProductos from "./Reducers/Venta/reducerProductos";
import reducerLoading from "./Reducers/Loading/reducerLoading";
import reducerCarrito from "./Reducers/Venta/reducerCarrito";
import reducerClientes from "./Reducers/Clientes/reducerClientes";
import reducerVenta from "./Reducers/Venta/reducerVenta";
import reducerAnimations from "./Reducers/Animations/reducerAnimations";
import reducerErrors from "./Reducers/Errors/reducerErrors";

// Configuracion para redux-persist
// Poner en blacklist lo que NO se quiere persistir
const persistConfig = {
  key: "root",
  storage,
  keyPrefix: "",
  blacklist: [
    "openCart",
    "reducerProductos.tipoProductos",
    "reducerLoading",
    "form",
    "reducerAnimations",
    "reducerVenta",
    "reducerErrors"
  ]
};

const sagaMiddleware = createSagaMiddleware();

// Combinamos todos los reducers que tenemos en un solo root
const rootReducer = combineReducers({
  form,
  reducerSession,
  reducerProductos,
  reducerLoading,
  reducerCarrito,
  reducerClientes,
  reducerVenta,
  reducerAnimations,
  reducerErrors
});

// Armamos el reducer a persisitir
const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const composeEnhancers = composeWithDevTools(
//   applyMiddleware(sagaMiddleware, ReduxThunk)
// );

// const store = createStore(
//   persistedReducer,
//   composeWithDevTools(applyMiddleware(sagaMiddleware, ReduxThunk))
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware, ReduxThunk))
);

const persistor = persistStore(store);
sagaMiddleware.run(primaryFunction);

export { store, persistor };
