export const closeCart = () => {
  return { type: "CLOSE_CART" };
};

export const addItemToEdit = item => {
  return { type: "SET_ITEM_TO_EDIT", item };
};

export const goToSearchProducts = navigation => dispatch => {
  navigation.navigate("BuscarProductos");
  return dispatch(closeCart());
};
