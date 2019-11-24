import {createStore} from 'redux'

const INITIAL_STATE ={
  playerName: 'nobody',
  keyPressed: "",
}

function reducer(state = INITIAL_STATE, action) {
  
  switch (action.type) {
    case 'HIT_KEY':
      console.log(action) // TODO: Remove this
      return {...state,
        keyPressed: action.keyPressed
      };
  
    default: return state;
  }
}

const store = createStore(reducer)

export default store