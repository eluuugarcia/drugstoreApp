const inicialState = {
  productos: [],
  productToAdd: null,
  barcodeNotFound: null,
  tipoProductos: null,
  marcas: null,
  proveedores: null,
  newProduct: null,
  yaExisteProducto: null
};

const setNewProduct = (state, action) => {
  const { response } = action;
  console.log(response);
  const newProduct = {
    barcode: action.response.barcode
  };

  if (response.existeProducto && response.existeEnSucursal) {
    return { ...state, yaExisteProducto: true };
  } else if (response.existeProducto) {
    newProduct.description = response.producto[0].descripcion;
    if (newProduct.description === null) {
      newProduct.description = "Descripción";
    }
    newProduct.marca = {
      idMarca: response.producto[0].idMarca,
      nombre: response.producto[0].marca.nombre
    };
    newProduct.tipoProducto = {
      idTipoProducto: response.producto[0].tipoProducto.idTipoProducto,
      nombre: response.producto[0].tipoProducto.nombre
    };
    newProduct.idTipo = response.producto[0].idTipo;
    newProduct.nombre = response.producto[0].nombre;
  }

  return {
    ...state,
    yaExisteProducto: false,
    newProduct,
    proveedores: response.proveedores,
    marcas: response.marcas,
    tipoProductos: response.tipoProductos
  };
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
    case "CARGAR_MARCAS":
      return { ...state, marcas: action.marcas };
    case "CARGAR_PROVEEDORES":
      return { ...state, proveedores: action.proveedores };
    case "SET_NEW_PRODUCT":
      return setNewProduct(state, action);
    default:
      return state;
  }
}

export default reducerProductos;
