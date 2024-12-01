import React from 'react'
import { styled } from 'styled-components'

const Header = () => {
  return (
    <HeaderStyle>
        <h1>
            My Movie Diary
        </h1>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.header`
    width : 100%;
    margin : 0 auto;

    position : fixed;
    top : 0;

    display : flex;
    padding : 20px 0;
    background-color : black;    

    h1 {
        color : white;
    }
`

export default Header;