import React from "react";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Navbar = styled.nav`
background-color: #722;
    overflow: hidden;
`;

const NavList = styled.ul`
 list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
`;

const NavItem = styled.li`
    display: inline;
`;

const NavLinkStyled = styled(NavLink)`
   display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
     margin: 1rem;

   &.active {
    margin: 1rem;
    border: 2px solid white;
    border-radius: 4px;
  }

  &:hover {
    background-color: #ddd;
    color: black;
  }

  &:active {
    background-color: beige;
    color: white;
  }
`;




export default function Nav() {

    return (
        <Navbar >
          <NavList >
            <NavItem>
              <NavLinkStyled to="/" end  >Home</NavLinkStyled>
            </NavItem>
            <NavItem >
              <NavLinkStyled to="/exercicio1"  >Exercicio 1</NavLinkStyled>
            </NavItem>
            <NavItem >
              <NavLinkStyled to="/exercicio2" > Exercicio 2</NavLinkStyled>
            </NavItem>
            <NavItem >
              <NavLinkStyled to="/exercicio3" > Exercicio 3</NavLinkStyled>
            </NavItem>
            <NavItem >
              <NavLinkStyled to="/exercicio4" > Exercicio 4</NavLinkStyled>
            </NavItem>
            <NavItem >
              <NavLinkStyled to="/about">About</NavLinkStyled>
            </NavItem>
          </NavList>
        </Navbar>
      );
}
