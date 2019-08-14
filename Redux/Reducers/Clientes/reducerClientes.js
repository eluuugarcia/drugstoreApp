const inicialState = { clientes: null };

function reducerClientes(state = inicialState, action) {
  switch (action.type) {
    case "CARGAR_CLIENTES":
      return { ...state, clientes: action.clientes };
    default:
      return state;
  }
}

export default reducerClientes;
