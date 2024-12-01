import React from 'react'
import { styled } from 'styled-components'

const Footer = () => {
  return (
    <FooterStyle>
        <div>
            <p>copyright(c), 2024, Junho</p>
        </div>
    </FooterStyle>
  )
}

const FooterStyle = styled.footer`
    width : 100%;
    margin : 0 auto;

    position : fixed;
    bottom : 0;

    display : flex;
    padding : 5px 0;
    background-color : black;

    p {
        color : white;
    }
`

export default Footer;