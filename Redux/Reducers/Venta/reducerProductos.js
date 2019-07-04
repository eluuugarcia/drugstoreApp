const inicialState = { productos: [], productToAdd: null };

function reducerProductos(state = inicialState, action) {
  switch (action.type) {
    case 'CARGAR_PRODUCTOS':
      return { ...state, productos: action.productos };
    case 'CREATE_PRODUCT_TO_ADD':
      return { ...state, productToAdd: action.productToAdd };
    case 'CANCEL_PRODUCT_TO_ADD':
      return { ...state, productToAdd: null };
    default:
      return state;
  }
}

export default reducerProductos;
