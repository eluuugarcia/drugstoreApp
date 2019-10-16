const inicialState = {
  showError: false,
  textError: "",
  titleError: "",
  showCancelar: false,
  goToInicio: false
};

function reducerErrors(state = inicialState, action) {
  switch (action.type) {
    case "SET_ERROR":
      console.log(action);
      return {
        ...state,
        showError: true,
        textError: action.error.textError,
        titleError: action.error.titleError,
        showCancelar: action.error.showCancelar,
        onPress: action.error.onPress,
        goToInicio: false
      };

    case "UNSET_ERROR":
      return {
        ...state,
        showError: false,
        textError: "",
        titleError: "",
        showCancelar: false,
        goToInicio: true
      };

    case "UNSET_GO_TO_INICIO":
      return {
        ...state,
        goToInicio: false
      };

    default:
      return state;
  }
}

export default reducerErrors;
