import React, { Component } from 'react'
import styled from "styled-components";
import { connect } from 'react-redux'


export class enemy extends Component {
  render() {
    return (
      <Wrapper>
        
      </Wrapper>
    )
  }
}

const Wrapper = styled.section`
  width: 96px;
  height: 96px;
  position: absolute;
  bottom: 0;
  ${'' /* left: calc(${ props => props.pos }vw - 96px); */}
  transition: all 1s;
  left: calc(${ props => props.pos }vw - 96px);
`;
export default enemy
