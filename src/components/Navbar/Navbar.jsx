import React from 'react';
import styled from '@emotion/styled';
import { shadow } from '../../CssVariables';

const Navbar = () => {

    const Nav = styled.nav`
        background: #fff;
        width: 100%;
        height: 60px;
        ${shadow}
        padding: 0 120px;
        margin: 0;
        display: flex;
        flex-direction: raw;
        align-items: center;
    `
    const H1 = styled.h1`
        font-size: 35px;
        margin: 0;
        padding: 0;
        color: #040C51;
        text-transform: uppercase;
    `



  return (
    <Nav>
        <H1>
            search app
        </H1>
    </Nav>
  )
}

export default Navbar