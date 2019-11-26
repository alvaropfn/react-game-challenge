import { createStore } from "redux";


// positaions 20 48 80
const INITIAL_STATE = {
  pos: 20,
  playerName: "nobody",
  playerScore: 0,
  keyPressed: "",
  isRunning: false
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
  const posc = 48, posl= 20, posr = 80
  if(state.isRunning) {
    switch (dir) {
      case 'left':
        if(state.pos === posc) pos = 20
        if(state.pos === posr) pos = 48
        break;
      case 'center':
        pos = 48;
        break;
      case 'right':
        if(state.pos === posl) pos = 48
        if(state.pos === posc) pos = 80
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
