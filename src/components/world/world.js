import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import store from "../../store/store";
import Player from "../player/player";
import Enemy from "../enemy/enemy";

import bg_dinamic from "../../assets/world.gif";
import bg_static from "../../assets/world.jpg";

const World = ({state}) => {
  return (
    <Wrapper isRunning={state.game.isRunning}>
      <img className="static" src={bg_static}></img>
      <img className="dinamic" src={bg_dinamic}></img>
      <Enemy 
        size={12}
        posx={180}
        posy={208}
        dis={store.getState().game.meters}
        dir="left"
      />
      <Player />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100%;
  background-color: red;
  position: relative;

  img {
    position: relative;
    height: auto;
    width: 100%;

    &.static {
      display: ${ props => props.isRunning ? 'none': 'grid' };
      background-image: url(${bg_static});
    }
    &.dinamic {
      display: ${ props => props.isRunning ? 'grid': 'none' };
      background-image: url(${bg_dinamic});
    }
  }
`;

export default connect(state => ({ state: state }))(World);
