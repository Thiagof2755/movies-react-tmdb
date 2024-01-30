import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import Search from './Search';

const Nav = styled.nav`
    background: linear-gradient(to bottom, rgb(3, 37, 65), transparent 80%);
    padding: 10px 0; /* Adicionado um preenchimento para espaçamento interno */
`;

const Navbar = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column; /* Alterado para coluna em telas menores */
        align-items: center;
    }
`;

const Options = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 768px) {
        margin-top: 10px; /* Adicionado um espaçamento superior para telas menores */
    }
`;

const LinkStyled = styled(Link)`
    align-items: left;
    font-size: 1rem;
    font-weight: bold;
    color: #fff; /* Adicionado cor para garantir visibilidade */
    

    @media (max-width: 768px) {
        font-size: 0.8rem;
        margin-bottom: 1rem;

    }
`;

const NavBar = () => {
    return (
        <Nav>
            <Navbar>
                <LinkStyled to="/">
                    <Logo />
                </LinkStyled>
                <Options>
                    <LinkStyled to="/movie/1">Movie</LinkStyled>
                    <LinkStyled to="/series/1">Series</LinkStyled>
                </Options>
                <Search />
            </Navbar>
        </Nav>
    );
};

export default NavBar;
