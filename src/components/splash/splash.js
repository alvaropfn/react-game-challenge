import React, { useState } from 'react'
import styled from "styled-components";
import { connect } from "react-redux";
import store from "../../store/store"

const Splash = ({state}) => {
  
  const [count, setCount] = useState(0);

  const countDown = () =>{

    var countDownDate = new Date().getTime() + 3;
    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return {
      countDownDate: countDownDate,
      seconds: seconds,
    }
  }

  return (
    <Wrapper game={{...state.game}}>
      <p>{countDown().countDownDate}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>{count}</p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: ${props => props.game.splashScreen ? "flex" : "none"};
  position: absolute;
  top: 48px;
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
`;

export default connect(state => ({state: state}))(Splash)