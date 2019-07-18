const initialState = {
  cart: [],
  openCart: false,
  totalCart: 0,
  itemToEdit: null,
  ok: false
};

const calcularTotal = cart => {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].subtotal;
  }
  return total;
};

const openCart = state => {
  return { ...state, openCart: true };
};

const closeCart = state => {
  return { ...state, openCart: false };
};

const newCart = (state, action) => {
  return {
    ...state,
    cart: action.cart,
    totalCart: calcularTotal(action.cart)
  };
};

const setCheckAnimation = state => {
  return { ...state, ok: true };
};

const unsetCheckAnimation = state => {
  return { ...state, ok: false };
};

const emptyCart = state => {
  return { ...state, cart: [], totalCart: 0 };
};

const editItem = (state, action) => {
  return { ...state, itemToEdit: action.itemToEdit };
};

const cancelEditItem = state => {
  return { ...state, itemToEdit: null };
};

const reducerCarrito = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CART":
      return newCart(state, action);
    case "CLEAN_CART":
      return emptyCart(state);
    case "OPEN_CART":
      return openCart(state);
    case "CLOSE_CART":
      return closeCart(state);
    case "SET_ITEM_TO_EDIT":
      return editItem(state, action);
    case "UNSET_ITEM_TO_EDIT":
      return cancelEditItem(state);
    case "SET_CHECK_ANIMATION":
      return setCheckAnimation(state);
    case "UNSET_CHECK_ANIMATION":
      return unsetCheckAnimation(state);
    default:
      return state;
  }
};

export default reducerCarrito;
