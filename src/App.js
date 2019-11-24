import React from "react";
import styled from "styled-components";
import store from './store/store'
import { Provider } from "react-redux";
import KeyboardEventHandler from "react-keyboard-event-handler";

import World from './components/world/world'

function hitKey(key ) {
  console.log('hitkey')
  return {
    type: 'HIT_KEY',
    keyPressed: key
  }
}

function App(keyPressed, dispatch) {
  return (
    <Wrapper>
      <Provider store = { store } >
        <KeyboardEventHandler 
          handleKeys={["all"]}
          onKeyEvent={(key, e) => store.dispatch(hitKey(key))}
        > 
        {/* <World /> */}
        </KeyboardEventHandler>
      </Provider>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.section`
  min-width: 360px;
  max-width: 420px;
  background-color: aqua;
  min-height: 640px;
  max-height: 740px;
`;
