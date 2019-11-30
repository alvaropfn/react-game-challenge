import React, { useState } from 'react'
import styled from "styled-components";
import { connect } from "react-redux";
import store from "../../store/store"

const Splash = ({state}) => {
  const getDate = () => new Date().getTime() + 4000
  const [startDate, setDate] = useState(getDate);
  const [counting, setCount] = useState(false);
  const startGame = () => {
    store.dispatch({type: 'startGame'})
  }

  const countDown = () => {
    let toReturn = {
        startDate: 0,
        seconds: 0,
      }

    if(store.getState().game.splashScreen && !counting){
      setCount(!counting)
      setDate(getDate())
    }
    else{
      var now = new Date().getTime();
      // Find the distance between now and the count down date
      var distance = startDate - now;
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      toReturn = {
        startDate: startDate,
        seconds: seconds,
      }

      if(counting && distance <= 0 ){
        setCount(false)
        startGame()
      }
    }
    
    return toReturn
  }

  return (
    <Wrapper game={{...state.game}}>
      <p>{countDown().seconds}</p>

      <button onClick={ () => startGame()}>
        skip
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: ${props => props.game.splashScreen ? "flex" : "none"};
  position: absolute;
  top: 61px;
  padding: 0.5em; 
  border-radius: 25px 5px
  border: 0.2em solid white;
  left: calc(50vw - 124px);
  background-color: #222D;
  width: 200px;
  height: 180px;
  color: #FFF;
  flex-flow: column;
  justify-content: space-around;
  p{
    text-align: center;
    font-size: 5em;
    margin: 5px auto;
  }
  button {
    color: #FFF;
    background-color: #00B4F7;
    align-self: center;
    width: 100%;
    height: 2.5em;
    border-radius: 12px;
  }
`;

export default connect(state => ({state: state}))(Splash)