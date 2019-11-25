import React from 'react'
import styled from "styled-components";
import { connect } from 'react-redux'


const Header = ({state}) => {
  return (
    <Wrapper isRunning={state.isRunning}>
      Header
    </Wrapper>
  )
}

const Wrapper = styled.section`

}
`;

export default connect(state => ({state: state}))(Header)
