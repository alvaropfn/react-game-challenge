import React from 'react'
import styled from "styled-components";
import { connect } from 'react-redux'

import { MdMenu } from 'react-icons/md';



const Header = ({state}) => {
  return (
    <Wrapper isRunning={state.isRunning}>
      Lets go for a <MdMenu />? 
    </Wrapper>
  )
}

const Wrapper = styled.section`

}
`;

export default connect(state => ({state: state}))(Header)
