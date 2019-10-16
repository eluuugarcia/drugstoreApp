import React from "react";
import { ImageBackground } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Redux/store";
import Start from "./Start";
import Loading from "./Componentes/GlobalUtils/Loading";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={<Loading color="#b88ae6" />}
          persistor={persistor}
        >
          <Start />
        </PersistGate>
      </Provider>
    );
  }
}
