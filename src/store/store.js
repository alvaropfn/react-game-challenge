import { createStore } from "redux";

const INITIAL_STATE = {
  keyPressed: "",
  player: {
    name: "nobody"
  },
  game: {
    running: false
  }
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "hit_a":
      return { ...state, keyPressed: action.key };
    case "hit_s":
      return { ...state, keyPressed: action.key };
    case "hit_d":
      return { ...state, keyPressed: action.key };
    case "hit_esc":
      return escHandler(state)
    default:
      return state;
  }
}

function escHandler(state){
  let resultGameState = state
  const toggl = !resultGameState.game.running
  resultGameState.game.running = toggl;
  console.log(state.game)
  return resultGameState
}

const store = createStore(reducer);

export default store;
