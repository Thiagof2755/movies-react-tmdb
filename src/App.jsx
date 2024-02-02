import React from 'react';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import NavBar from './Components/NavBar';
import styled from 'styled-components';
import Body from './Components/Body';




const StyledApp = styled.div`

`;

const App = () => (
  <StyledApp>
    <NavBar />
    <Body/>
    <Outlet />
  </StyledApp>
);

export default App;
