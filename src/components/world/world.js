import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import store from "../../store/store";
import Player from "../player/player";
import Enemy from "../enemy/enemy";

import bg_dinamic from "../../assets/world.gif";
import bg_static from "../../assets/world.jpg";

const World = ({state}) => {
  const minMaxRandom = (min = 1, max = 3) => {
    return Math.floor(Math.random() * (max - min))+min;
  }

  const randomDir = () => {
    const dir = minMaxRandom()
    let toReturn = ''
    if(dir === 1) toReturn = 'left'
    if(dir === 2) toReturn = 'center'
    if(dir === 3) toReturn = 'right'
    return toReturn
  }

  const randomPos = () => {
    const posx = minMaxRandom()
    let toReturn = 0
    if(posx === 1) toReturn = 180
    if(posx === 2) toReturn = 195
    if(posx === 3) toReturn = 208
    return toReturn
  }

  const randomStart = (min) => {
    const start = minMaxRandom(min, min + 300)
    return start
  }
  
  return (
    <Wrapper isRunning={state.game.isRunning}>
      <img className="static" src={bg_static}></img>
      <img className="dinamic" src={bg_dinamic}></img>
      <Enemy 
        size={12}
        posx={randomPos()}
        posy={208}
        dis={randomStart(store.getState().game.meters)}
        dir={randomDir()}
      />
      <Enemy 
        size={12}
        posx={randomPos()}
        posy={208}
        dis={randomStart(store.getState().game.meters)}
        dir={randomDir()}
      />
      <Enemy 
        size={12}
        posx={randomPos()}
        posy={208}
        start={0}
        dis={randomStart(store.getState().game.meters)}
        dir={randomDir()}
      />
      <Player />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100%;
  background-color: red;
  position: relative;
  border-radius: 0
  border: 0.2em solid white;
  border-top: 0;
  border-bottom: 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
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
