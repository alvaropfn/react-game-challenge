import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Player from "../player/player";

import bg_dinamic from "./world.gif";
import bg_static from "./world.jpg";

function hitKey(key) {
  return {
    type: "HIT_KEY",
    keyPressed: key
  };
}

const World = ({ game }) => {
  if (game.running) {
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

export default connect(state => ({ game: state.game }))(World);
