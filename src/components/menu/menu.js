import React from 'react'
import styled from "styled-components";
import { connect } from 'react-redux'

const Menu = ({game}) => {
  if(game.running) {
    return (
      <Wrapper>
        <div className='menu'>Menu</div>
      </Wrapper>
    )
  }
  else return( <Wrapper />)
}

const Wrapper = styled.section`

.menu {
  position: absolute;
  top: 120px;
  left: calc(50vw - 50px);
  background-color: black;
  width: 100px;
  height: 100px;
  color: #fff;
}
`;

export default connect(state =>({game: state.game}))(Menu)
