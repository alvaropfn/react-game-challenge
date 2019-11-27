import React from "react"
import styled from "styled-components"
import store from "./store/store"
import { Provider } from "react-redux"
import KeyboardEventHandler from "react-keyboard-event-handler"

import Header from "./components/header/header"
import World from "./components/world/world"
import Form from "./components/form/form"
import Splash from "./components/splash/splash"
import Menu from "./components/menu/menu"

function hitKey(e,key) {

  // Prevent some inconsistent behaves
  switch (key) {
    case 'up':
    case 'down':
      e.preventDefault()
      break;
    default: break;
  }
  
  return {
    type: `hit_${key}`,
    key: key
  };
}


function runScene() {
  store.dispatch({type: 'run_scene'})
}

function App(keyPressed, dispatch) {
  
  window.setInterval(runScene, 50);

  return (
    <Wrapper>
      <Provider store={store}>
        <KeyboardEventHandler
          handleKeys={["all"]}
          onKeyEvent={(key, e) => store.dispatch(hitKey(e, key))}
        />
        <Header />
        <World />
        <Form />
        <Splash />
        <Menu />
      </Provider>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.section`
  min-width: 360px;
  max-width: 420px;
  background-color: #00b4f7;
  min-height: 640px;
  max-height: 740px;
`;
