import React from 'react'
import styled from "styled-components";
import { connect } from 'react-redux'

const player = ({state}) => {
    return (
      <Wrapper isRunning={state.isRunning}>
        {state.keyPressed}
      </Wrapper>
    )
}
const Wrapper = styled.section`
  width: 42px;
  height: 42px;
  position: absolute;
  bottom: 0;
  left: calc(50vw - 42px);
  background-color: blue;
  background-color: ${props => props.isRunning ? 'blue' : 'red'} ;
`;

export default connect(state => ({state: state}))(player)
