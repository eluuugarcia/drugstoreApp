export const closeCart = () => {
  return { type: "CLOSE_CART" };
};

export const goToSearchProducts = navigation => dispatch => {
  const routeName = navigation.state.routeName;
  console.log(routeName);
  if (routeName === "BuscarProductos") {
    return dispatch(closeCart());
  } else {
    navigation.navigate("BuscarProductos");
    return dispatch(closeCart());
  }
};
