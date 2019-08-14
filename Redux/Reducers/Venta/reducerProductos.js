const inicialState = {
  productos: [],
  productToAdd: null,
  barcodeNotFound: null,
  tipoProductos: null
};

function reducerProductos(state = inicialState, action) {
  switch (action.type) {
    case "CARGAR_PRODUCTOS":
      return { ...state, productos: action.productos };
    case "CREATE_PRODUCT_TO_ADD":
      return { ...state, productToAdd: action.productToAdd };
    case "CANCEL_PRODUCT_TO_ADD":
      return { ...state, productToAdd: null };
    case "SET_BARCODE_NOT_FOUND":
      return { ...state, barcodeNotFound: true };
    case "UNSET_BARCODE_NOT_FOUND":
      return { ...state, barcodeNotFound: false };
    case "CARGAR_TIPOS_PRODUCTOS":
      return { ...state, tipoProductos: action.tipoProductos };
    default:
      return state;
  }
}

export default reducerProductos;
