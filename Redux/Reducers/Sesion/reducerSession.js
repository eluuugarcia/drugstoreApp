const inicialState = { token: null, error: null, sesionExist: null };

function reducerSession(state = inicialState, action) {
  switch (action.type) {
    case "SET_SESSION":
      return { ...state, token: action.token };

    case "UNSET_SESSION":
      return { ...state, token: null };

    case "SET_ERROR_SESSION":
      return { ...state, error: true };

    case "SET_PREVIOUS_SESSION_EXIST":
      return { ...state, previousToken: action.oldToken, sesionExist: true };

    case "UNSET_ERROR_SESSION":
      return {
        ...state,
        error: false,
        sesionExist: false,
        previousToken: null
      };

    case "UNSET_PREVIOUS_SESSION":
      return { ...state, previousToken: null, sesionExist: false };

    case "REMOVE_STATE":
      return { token: null };

    default:
      return state;
  }
}

export default reducerSession;
