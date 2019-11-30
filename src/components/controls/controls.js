import React from 'react'
import styled from "styled-components";
import { connect } from "react-redux";
import store from "../../store/store"

const Controls = ({state}) => {
  const hit_control = (dir) =>{
    store.dispatch( {type: `hit_${dir}`})
  }
  return (
    <Wrapper game={{...state.game}}>
      <button onClick={()=>hit_control('left')} > 
        <i className="left"></i>
      </button>
      <button className="esc" onClick={()=>hit_control('esc')}> 
        ESC
      </button>
      <button onClick={()=>hit_control('right')}> 
        <i className="right"></i>
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: ${props => props.game.isRunning ? "flex" : "none"};
  display: flex;
  padding: 0.5em; 
  border-radius: 0 0 25px 25px
  border: 0.2em solid white;
  left: calc(50vw - 124px);
  background-color: #222D;
  height: 180px;
  color: #FFF;
  justify-content: space-between;
  p{
    text-align: center;
    font-size: 5em;
    margin: 5px auto;
  }
  button {
    color: #00B4F7;
    background-color: #FFF;
    align-self: center;
    width: 4.5em;
    height: 7em;
    border-radius: 12px;
    margin: auto 1.5em;
  }
  .esc {
      width: 6em;
    }
  i {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;

    .left {
      transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
    }

    .right {
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
    } 
  }
`;

export default connect(state => ({state: state}))(Controls)