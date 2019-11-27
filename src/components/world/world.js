import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Player from "../player/player";
import Enemy from "../enemy/enemy";

import bg_dinamic from "../../assets/world.gif";
import bg_static from "../../assets/world.jpg";

function hitKey(key) {
  return {
    type: "HIT_KEY",
    keyPressed: key
  };
}

const World = ({ state }) => {
  if (state.isRunning) {
    return (
      <Wrapper>
        <img className="dinamic" src={bg_dinamic}></img>
        <Player />
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <img className="static" src={bg_static}></img>
        <Player />
        <Enemy />
      </Wrapper>
    );
  }
};

const Wrapper = styled.section`
  width: 100%;
  background-color: red;
  position: relative;

  img {
    position: relative;
    height: auto;
    width: 100%;

    &.static {
      background-image: url(${bg_static});
    }
    &.dinamic {
      background-image: url(${bg_dinamic});
    }
  }
`;

export default connect(state => ({ state: state }))(World);
