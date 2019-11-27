import React, { Component } from 'react'
import styled from "styled-components";
import { connect } from 'react-redux'

import car from '../../assets/car.png'

const pathCalc = (x, y, s) =>{
  return {posx: x, posy: y, size: s};
}

const randomColor = () =>{
  const HUEDEG = 60
  return HUEDEG * (Math.floor(Math.random() * 5) +1)
}
export class enemy extends Component {
  constructor(props) {
    super(props)
    this.state = {...props, color: randomColor()}
  }

  render() {
    return (
      <Wrapper carState={
        pathCalc(this.state.posx,this.state.posy,this.state.size)}
          color={this.state.color}
        >
        <img src={car}></img>
      </Wrapper>
    )
  }
}

const Wrapper = styled.section`
  width: calc(${ props => props.carState.size}px);
  height: calc(${ props => props.carState.size}px);
  position: absolute;
  
  filter:hue-rotate(${ props => props.color}deg); ${''/* 60, 120, 180, 240, 300*/ }
  ${'' /* left: calc(${ props => props.pos }vw - 96px); */}
  transition: all 1s;
  bottom: calc(${ props => props.carState.posy}px);
  left: calc(${ props => props.carState.posx }px);
`;
export default enemy
