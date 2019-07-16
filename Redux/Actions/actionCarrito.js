export const closeCart = () => {
  return { type: "CLOSE_CART" };
};

export const addItemToEdit = itemToEdit => {
  return { type: "SET_ITEM_TO_EDIT", itemToEdit };
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

export const cancelProductToEdit = () => dispatch => {
  return dispatch(unsetProductToEdit());
};
