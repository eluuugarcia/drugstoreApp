const inicialState = {
  showAnimation: false,
  animation: null,
  textAnimation: null,
  colorAnimation: null,
  speedAnimation: 1
};

function reducerAnimations(state = inicialState, action) {
  switch (action.type) {
    case "SHOW_ANIMATION":
      const speed = 1;
      if (action.speedAnimation) {
        speed = action.speedAnimation;
      }
      return {
        ...state,
        showAnimation: true,
        animation: action.animation,
        textAnimation: action.textAnimation,
        colorAnimation: action.colorAnimation,
        speedAnimation: speed
      };
    case "HIDE_ANIMATION":
      return {
        ...state,
        showAnimation: false,
        textAnimation: null,
        colorAnimation: null,
        speedAnimation: 1
      };
    default:
      return state;
  }
}

export default reducerAnimations;
