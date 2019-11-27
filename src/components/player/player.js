import React from 'react'
import styled from "styled-components";
import { connect } from 'react-redux'

import car from '../../assets/car.png'
const player = ({state}) => {
    return (
      <Wrapper carState={{...state}}>
        <img src={car}></img>
        {state.keyPressed}
        {state.pos}
      </Wrapper>
    )
}
const Wrapper = styled.section`
  width: ${ props => props.carState.carState.carSize }px;
  height: 96px;
  position: absolute;
  bottom: 0;
  ${'' /* left: calc(${ props => props.pos }vw - 96px); */}
  transition: all 1s;
  left: calc(${ props => props.carState.pos }px );

`;

export default connect(state => ({state: state}))(player)
