import React from 'react'
import styled from "styled-components";
import { connect } from 'react-redux'

import car from './player.png'
const player = ({state}) => {
    return (
      <Wrapper pos={state.pos}>
        <img src={car}></img>
        {state.keyPressed}
        {state.pos}
      </Wrapper>
    )
}
const Wrapper = styled.section`
  width: 96px;
  height: 96px;
  position: absolute;
  bottom: 0;
  ${'' /* left: ${ props => props.pos }px ; */}
  left: calc(${ props => props.pos }vw - 96px) ;

`;

export default connect(state => ({state: state}))(player)
