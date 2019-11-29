import React, { Component } from 'react'
import styled from "styled-components";

import car from '../../assets/car.png'
import store from '../../store/store';



const randomColor = () => {
  const HUEDEG = 60
  return HUEDEG * (Math.floor(Math.random() * 5) +1)
}

export class enemy extends Component {

  constructor(props) {
    super(props)
    this.state = {...props,
      color: randomColor(),
      minh: -30,
    }
  }

  pathLeft = (posy, dis) => {
    let y = Math.floor(posy - 2 * dis)
    let x = Math.floor((y - 1) / 1.15)
    return {x: x, y: y }
  }

  pathCenter = (posy, dis) => {
    let y = Math.floor(posy - 2 * dis)
    let x = Math.floor((y + 735) / 4.84)
    return {x: x, y: y }
  }

  pathRight = (posy, dis) => {
    let y = Math.floor(posy - 2 * dis)
    let x = Math.floor((y - 611) / (-1.96))
    return {x: x, y: y }
  }

  sizeCalc = (size) => {
    
  }
  // this.state.dis == start distance
  pathCalc = (x, y, s) => {
    if(!store.getState().game.isRunning){
      return {posx: x, posy: y, size: s}
    }
    const initialPos = this.state.dis
    const actualPos = store.getState().game.meters
    
    const dis = actualPos - initialPos
    const carSize = store.getState().carSize
    s = s+dis <= carSize ? s+dis : carSize
    let result
    switch (this.state.dir) {
      case 'left': result = this.pathLeft(y, dis)
        break;
      case 'center': result = this.pathCenter(y, dis)
        break;
      case 'right': result = this.pathRight(y, dis)
        break;
      default: break;
    }

    return {posx: result.x, posy: result.y, size: s, minh: this.state.minh};
  }

  render() {
    let carState = this.pathCalc(
      this.state.posx,
      this.state.posy,
      this.state.size,
    )

    if(carState.posy <= this.state.minh ){
      this.state.color = randomColor();
      const min = store.getState().game.meters
      const max = min + 350;
      this.state.dis = Math.floor(Math.random() * (max - min))+min
    }
    return (
    <Wrapper carState={carState}
      
        color={this.state.color}
      >
      <img src={car}></img>
      {/* <p>{this.state.dis}</p> */}
    </Wrapper>
  )}
}

const Wrapper = styled.section`
  display: ${ props => props.carState.posy > props.carState.minh && props.carState.posy < 208 ? 'block': 'none'}
  width: calc(${ props => props.carState.size}px);
  height: calc(${ props => props.carState.size}px);
  position: absolute;
  
  filter:hue-rotate(${ props => props.color}deg); ${''/* 60, 120, 180, 240, 300*/ }
  ${'' /* left: calc(${ props => props.pos }vw - 96px); */}
  transition: all 0.1s;
  bottom: calc(${ props => props.carState.posy}px);
  left: calc(${ props => props.carState.posx }px);

  p{
    color:#FFF;
  }
`;
export default enemy
