import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import Search from './Search';

const Nav = styled.nav`
    background-color: rgb(3, 37, 65);
`;

const Navbar = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0;

    @media (max-width: 768px) {
        margin: 0 auto;
        max-width: 390px;
        width: 100%; 
        box-sizing: border-box
`;

const Options = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 768px) {
        
    }
`;

const LinkStyled = styled(Link)`
    font-size: 1rem;
    font-weight: bold;
    @media (max-width: 768px) {
        font-size: 0.5rem;
    }
`;



const NavBar = () => {
    return (
        <Nav>
            <Navbar>
                <Options>
                    <LinkStyled to="/">
                        <Logo />
                    </LinkStyled>
                    <LinkStyled to="/movie/1">Movie</LinkStyled>
                    <LinkStyled to="/series/1">Series</LinkStyled>
                </Options>
                <Search />  
            </Navbar>
        </Nav>
    );
};

export default NavBar;
