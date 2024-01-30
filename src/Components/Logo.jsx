import React from 'react';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledLogo = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 0;

  @media (max-width: 768px) {
    /* Ajuste o espaçamento ou tamanho da logo para telas menores */
    margin-right: 10px;
  }
`;

const CameraIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  color: #35a1cb;
  margin-right: 1rem;

  @media (max-width: 768px) {
    /* Ajuste o tamanho do ícone para telas menores */
    font-size: 2rem;
  }
`;

const StyledH1 = styled.h1`
  font-size: 1.5rem;
  color: #fff;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;

  @media (max-width: 768px) {
    align-items: center;
    display: flex;
    font-size: 1rem;
    margin-top: 0;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const Logo = () => {
  return (
    <StyledLogo>
      <CameraIcon icon={faVideo} />
      <StyledH1>DevCine</StyledH1>
    </StyledLogo>
  );
};

export default Logo;