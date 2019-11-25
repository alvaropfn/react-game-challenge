import { createStore } from "redux";

const INITIAL_STATE = {
  player: {
    name: "nobody"
  },
  keyPressed: "",
  isRunning: false
};

function reducer(state = INITIAL_STATE, action) {
  console.log(action.type) // TODO debug
  switch (action.type) {
    case 'hit_left':
    case 'hit_a':
      return { ...state, keyPressed: action.key };
    case 'hit_down':
    case "hit_s":
      return { ...state, keyPressed: action.key };
    case 'hit_right':
    case "hit_d":
      return { ...state, keyPressed: action.key };
    case "hit_esc":
      return escHandler(state)
    default:
      return state;
  }
}

function escHandler(state){
  // let resultGameState = state
  // const toggl = !resultGameState.game.running
  // resultGameState.game.running = toggl;

  // console.log(state.game) //TODO debug
  // return resultGameState

  return {
    ...state,
    isRunning: !state.isRunning
  }
}

const store = createStore(reducer);

export default store;
