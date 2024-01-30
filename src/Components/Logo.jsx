import React from 'react';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  magin-bottom: 0;

`;

const CameraIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  color: #35a1cb;
  margin-right: 1rem;
  align-items: flex-end;
  magin-bottom: 0;
`;

const StyledH1 = styled.h1`
  font-size: 1,5rem;
  color: #fff;
  align-items: flex-end;
  magin-bottom: 0;

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
