import React from 'react'
import styled from "styled-components";
import { connect } from 'react-redux'

const player = ({player}) => {
    return (
      <Wrapper>
        {player.name}
      </Wrapper>
    )
}
const Wrapper = styled.section`
  width: 42px;
  height: 42px;
  background-color: blue;
  position: absolute;
  top: 0;
  left: 0;
`;

export default connect(state => ({player: state.player}))(player)
