import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import store from "../../store/store"

function handleSubmit(event) {
  event.preventDefault();

  const playerName = event.target.children[0].value

  store.dispatch({
    type: 'splashGame',
    playerName: playerName,
  })
}

const Form = ({state }) => {
  return (
    <Wrapper player={state.player} game={state.game}>
      <h1>Insert your Name</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="insert your name" />
        <button type="submit">Send</button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: ${props => props.game.formScreen ? "flex" : "none"};
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

  h1{
    color: #00B4F7;
  }

  form {
    display: flex;
    flex-flow: column;
    height: 100px;
    justify-content: space-around;

    input {
      color: #00B4F7;
      background-color: #FFF;
      text-align: center;
      align-self: center;
      height: 2.5em;
      width: 100%;
      border-radius: 12px;
      margin-bottom: 0.5em;
    }

    button {
      color: #FFF;
      background-color: #00B4F7;
      align-self: center;
      width: 100%;
      height: 2.5em;
      border-radius: 12px;
    }
  }
`;

export default connect(state => ({ state: state }))(Form);
