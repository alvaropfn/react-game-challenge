import React from 'react'
import styled from "styled-components";
import { connect } from 'react-redux'

import car from '../../assets/car.png'
const player = ({state}) => {
    return (
      <Wrapper player={{...state.player}} carSize={state.carSize}>
        <img src={car}></img>
        {state.keyPressed}
        {state.player.pos}
      </Wrapper>
    )
}
const Wrapper = styled.section`
  width: ${ props => props.carSize }px;
  height: 96px;
  position: absolute;
  bottom: 0;
  ${'' /* left: calc(${ props => props.pos }vw - 96px); */}
  transition: all 1s;
  left: calc(${ props => props.player.pos }px );

`;

export default connect(state => ({state: state}))(player)
