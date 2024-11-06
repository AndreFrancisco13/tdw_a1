import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const NavLink = styled(Link)`
   display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;

   &.active {
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
            <NavItem >
              <NavLink to="/" exact activeClassName="active">Home</NavLink>
            </NavItem>
            <NavItem >
              <NavLink to="/exercicio1" activeClassName="active" >Exercicio 1</NavLink>
            </NavItem>
            <NavItem >
              <NavLink to="/exercicio2" activeClassName="active"> Exercicio 2</NavLink>
            </NavItem>
            <NavItem >
              <NavLink to="/about" activeClassName="active">About</NavLink>
            </NavItem>
          </NavList>
        </Navbar>
      );
}
