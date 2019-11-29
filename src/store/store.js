import { createStore } from "redux";

const INITIAL_STATE = {
  player: {
    name: 'nobody',
    score: 0,
    pos: 152,
  },
  keyPressed: "",
  game: {
    isRunning: true,
    formScreen: false,
    splashScreen: false,
    menuScreen: false,
    meters: 0,
    now: 0,
  },
  carSize: 96,
};

function reducer(state = INITIAL_STATE, action) {
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

    case "run_scene":
      return moveFoward(state)

    case "splashGame":
      return splashGame(state, action.playerName)

    case "startGame":
      return startGame(state)
    
    case "restartGame": 
      return restartGame(state)
    default:
      return state;
  }
}
function splashGame(state, playerName){
  const toReturn = {
    ...state,
    player: {...state.player,
      name: playerName
    },
    game: {...state.game,
      isRunning: false,
      formScreen: false,
      splashScreen: true,
      menuScreen: false,
    },
  }
  return toReturn
}

function startGame(state){
  console.log('startGame')
  return {
    ...state,
    game: {...state.game,
      isRunning: true,
      formScreen: false,
      splashScreen: false,
      menuScreen: false,
    },
  }
}

function restartGame(){
  console.log('startGame')
  return { ...INITIAL_STATE }
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
        pos = posc;
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
  if(state.game.formScreen || state.game.splashScreen)
    return {...state}
  else {
    
    return {
      ...state,
      game: {...state.game, 
        isRunning: !state.game.isRunning,
        menuScreen: !state.game.menuScreen,
      }
    }
  }
}

function moveFoward(state) {
  let now = Date.now()
  let meters = state.game.meters
  let score = state.player.score
  if(state.game.isRunning 
    && now >= state.game.now +25
    ) {
    meters +=1
    score +=1
  }
  
  return {
    ...state,
    game: {...state.game, meters: meters, now: now},
    player: {...state.player, score: score},
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
