import React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as Logo } from '../../assets/img/pressexpresslogo.svg';

function PrintInfo({ order }) {
  const { name, room, hotel } = order;
  return (
    <Div>
      <Container>
        <H1>{name}</H1>
        <H1>{hotel}</H1>
        <H1> Room {room}</H1>
        <LogoContainer>
          <Logo />
        </LogoContainer>
      </Container>
    </Div>
  );
}

export default PrintInfo;

const Div = styled.div`
  page-break-before: always;
  display: none;
  align-items: flex-start;
  justify-content: center;
  background-color: white;
  z-index: 32553;
  padding: 20vh 0;
  text-align: center;

  @media print {
    display: flex;
  }
`;

const H1 = styled.h1`
  font-size: 4rem;
  margin: 0;
  color: #333;
`;

const LogoContainer = styled.div`
  width: 200px;
  margin-top: 3rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
