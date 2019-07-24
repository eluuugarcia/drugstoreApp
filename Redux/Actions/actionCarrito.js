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
  console.log("vamos a buscar el producto: ");
  console.log(barcode);
  products.forEach(product => {
    console.log("product.idProducto: ");
    console.log(product.idProducto);
    if (product.idProducto == barcode) {
      return dispatch(createItemToAdd(product));
    }
  });
};

export const cancelProductToEdit = () => dispatch => {
  return dispatch(unsetProductToEdit());
};
