import React from 'react'
import styled from "styled-components";
import { connect } from 'react-redux'

import { MdMenu } from 'react-icons/md';



const Header = ({state}) => {
  return (
    <Wrapper isRunning={state.isRunning}>
       <p className='name'> Player: {state.playerName}</p>
       <p className='divider'>|</p>
       <p className='score'>Score: {state.playerScore}</p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 36px;
  display: grid;
  padding-bottom: 10px;
  
  grid-template-areas:
    "name divider score";
  grid-template-columns: 5fr 1fr 5fr;

  .name {
    grid-area: name;
  }
  .divider {
    grid-area: divider;
  }
  .score {
    grid-area: score;
    padding-left 36px;
    text-align: left;
  }

  p {
    text-align: center;
  }
}
`;

export default connect(state => ({state: state}))(Header)
