export const closeCart = () => {
  return { type: "CLOSE_CART" };
};

export const addItemToEdit = itemToEdit => {
  return { type: "SET_ITEM_TO_EDIT", itemToEdit };
};

export const setItemToAdd = productToAdd => {
  return { type: "CREATE_PRODUCT_TO_ADD", productToAdd };
};

export const createItemToAdd = productToAdd => dispatch => {
  dispatch(setItemToAdd(productToAdd));
};

export const setBarcodeNotFound = () => {
  return { type: "SET_BARCODE_NOT_FOUND" };
};

export const unsetProductToAdd = () => {
  return { type: "CANCEL_PRODUCT_TO_ADD" };
};

export const unsetProductToEdit = () => {
  return { type: "UNSET_ITEM_TO_EDIT" };
};

export const editItemCart = item => dispatch => {
  return dispatch(addItemToEdit(item));
};

export const goToSearchProducts = navigation => dispatch => {
  navigation.navigate("BuscarProductos");
  return dispatch(closeCart());
};

export const searchBarcode = (barcode, products) => dispatch => {
  products.forEach(product => {
    if (product.producto.idProducto == barcode) {
      return dispatch(createItemToAdd(product));
    } else {
      return dispatch(setBarcodeNotFound());
    }
    // else {
    //   return dispatch(setBarcodeNotFound());
    // }
  });
};

export const cancelProductToEdit = () => dispatch => {
  return dispatch(unsetProductToEdit());
};
