import React from 'react'
import styled from "styled-components";
import { connect } from 'react-redux'


const Menu = ({state}) => {
  return (
    <Wrapper isRunning={state.isRunning}>
      <div className='menu' >
        <p>is Game Running: </p>
        <p>{state.isRunning.toString()}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

.menu {
  display: ${
    props => !props.isRunning ? 'block': 'none'
    };
  position: absolute;
  top: 120px;
  left: calc(50vw - 50px);
  background-color: black;
  width: 100px;
  height: 100px;
  color: #fff;
}
`;

export default connect(state => ({state: state}))(Menu)
