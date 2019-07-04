const initialState = {
  cart: []
};

const newCart = (state, action) => {
  return { ...state, cart: action.cart };
};

const reducerCarrito = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "UPDATE_CART":
      return newCart(state, action);
    default:
      return state;
  }
};

export default reducerCarrito;
