import { createStore } from "redux";


// positaions 20 48 80
const INITIAL_STATE = {
  pos: 0,
  playerName: "nobody",
  playerScore: 0,
  keyPressed: "",
  isRunning: false,
  carState:{carSize: 96,}
};

function reducer(state = INITIAL_STATE, action) {
  console.log(action.type) // TODO debug
  switch (action.type) {
    case 'hit_left':
    case 'hit_a':
      return movHandle(state, action.key, 'left')

    case 'hit_down':
    case "hit_s":
      return movHandle(state, action.key, 'center')

    case 'hit_right':
    case "hit_d":
      return movHandle(state, action.key, 'right')

    case "hit_esc":
      return escHandler(state)
    default:
      return state;
  }
}

function movHandle(state, key, dir) {
  let pos = state.pos;
  const posl= 0, posc = 152,posr = 312
  if(state.isRunning) {
    switch (dir) {
      case 'left':
        if(state.pos === posc) pos = posl
        if(state.pos === posr) pos = posc
        break;
      case 'center':
        pos = posc;
        break;
      case 'right':
        if(state.pos === posl) pos = posc
        if(state.pos === posc) pos = posr
        break;
      default: break;
    }
  }

  return { ...state, keyPressed: key, pos: pos };
}

function escHandler(state) {
  return {
    ...state,
    isRunning: !state.isRunning
  }
}

const store = createStore(reducer);

export default store;
