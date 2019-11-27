import React from 'react'
import styled from "styled-components";
import { connect } from 'react-redux'


const Menu = ({state}) => {
  return (
    <Wrapper isRunning={state.isRunning}>
      <div className='menu' >
        <button>Restart</button>
        <button>Rename</button>
        <button>Storeboard</button>
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
  top: 48px;
  padding: 0.5em;
  border-radius: 25px 5px
  border: 0.2em solid white;
  left: calc(50vw - 124px);
  background-color: #222D;
  width: 200px;
  height: 300px;
  color: #FFF;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  
  button {
    color: #FFF;
    background-color: #00B4F7;

    align-self: center;
    height: 2.5em;
    width: 120px;
    border-radius: 12px;
  }
}
`;

export default connect(state => ({state: state}))(Menu)
