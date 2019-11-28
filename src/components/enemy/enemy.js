import React, { Component } from 'react'
import styled from "styled-components";
import { connect } from 'react-redux'

import car from '../../assets/car.png'
import store from '../../store/store';



const randomColor = () =>{
  const HUEDEG = 60
  return HUEDEG * (Math.floor(Math.random() * 5) +1)
}

export class enemy extends Component {
  constructor(props) {
    super(props)
    this.state = {...props, color: randomColor()}
  }
  pathLeft = (posx, posy, dis) => {
    let y = posy - 2 * dis
    let x = (y - 1) / 1.15
    console.log(x, y)
    return {x: x, y: y }
  }

  pathCalc = (x, y, s) => {
    const dis = this.props.dis - this.state.dis
    const carSize = store.getState().carSize
    s = s+dis <= carSize ? s+dis : carSize


    const result = this.pathLeft(x, y, dis)
    console.log(result)
    return {posx: result.x, posy: result.y, size: s};
  }

  render() { return (
    <Wrapper carState={
      this.pathCalc(this.state.posx,this.state.posy,this.state.size)}
        color={this.state.color}
      >
      <img src={car}></img>
      <p>{this.state.dis}</p>
    </Wrapper>
  )}
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

  p{
    color:#FFF;
  }
`;
export default enemy
