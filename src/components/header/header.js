import React from 'react'
import styled from "styled-components"
import { connect } from 'react-redux'
import store from "../../store/store"

const Header = ({state}) => {
  return (
    <Wrapper>
       <p className='name'> Player: {state.player.name}</p>
       <p className='divider'>|</p>
       <p className='score'>Score: {state.player.score}</p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 36px;
  display: grid;
  padding-bottom: 10px;
  color: #FFF;
  background-color: #00B4F7;
  font-size: 1.2em;
  
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
