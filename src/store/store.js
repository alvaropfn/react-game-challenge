import { createStore } from "redux";


// positaions 20 48 80
const INITIAL_STATE = {
  player: {
    name: 'nobody',
    score: 0,
    pos: 152,
  },
  keyPressed: "",
  game: {
    isRunning: true,
    meters: 0,
  },
  carSize: 96,
};

function reducer(state = INITIAL_STATE, action) {
  // console.log(action.type) // TODO debug
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
  let pos = state.player.pos;
  const posl= 0, posc = 152,posr = 312
  if(state.game.isRunning) {
    switch (dir) {
      case 'left':
        if(state.player.pos === posc) pos = posl
        if(state.player.pos === posr) pos = posc
        break;
      case 'center':
        state.player.pos = posc;
        break;
      case 'right':
        if(state.player.pos === posl) pos = posc
        if(state.player.pos === posc) pos = posr
        break;
      default: break;
    }
  }

  return {
    ...state,
    keyPressed: key,
    player: { ...state.player, pos: pos }
  };
}

function escHandler(state) {
  return {
    ...state,
    game: {...state.game, isRunning: !state.game.isRunning}
  }
}

const store = createStore(reducer);

export default store;
