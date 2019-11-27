import React, { Component } from 'react'
import styled from "styled-components";
import { connect } from 'react-redux'

import car from '../../assets/car.png'

const pathCalc = (x, y, s) =>{
  return {posx: x, posy: y, size: s};
}


export class enemy extends Component {
  render() {
    return (
      <Wrapper carState={pathCalc(152,162,12)}>
        <img src={car}></img>
      </Wrapper>
    )
  }
}

const Wrapper = styled.section`
  width: calc(${ props => props.carState.size}px);
  height: calc(${ props => props.carState.size}px);
  position: absolute;
  
  filter:hue-rotate(90deg); ${''/* 60, 120, 180, 240, 300*/ }
  ${'' /* left: calc(${ props => props.pos }vw - 96px); */}
  transition: all 1s;
  bottom: calc(${ props => props.carState.posy}px);
  left: calc(${ props => props.carState.posx }px);
`;
export default enemy
