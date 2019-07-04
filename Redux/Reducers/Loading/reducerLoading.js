const inicialState = { loading: null };

function reducerLoading(state = inicialState, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: true };

    case 'UNSET_LOADING':
      return { ...state, loading: null };

    default:
      return state;
  }
}

export default reducerLoading;
