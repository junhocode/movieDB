import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";


interface LayoutProps {
    children : React.ReactNode;
};

function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header/>
            <LayoutStyle>{children}</LayoutStyle>
            <Footer/>
        </>
    );
};

const LayoutStyle = styled.main`
    width : 100%;
    margin : 0 auto;
    padding : 20px 0;
`

export default Layout;