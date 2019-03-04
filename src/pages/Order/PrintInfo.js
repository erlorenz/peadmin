import React from 'react';
import styled from 'styled-components/macro';

function PrintInfo({ order }) {
  const { name, room, hotel } = order;
  return (
    <Div>
      <div>
        <H1>{name}</H1>
        <H1>{hotel}</H1>
        <H1>{room}</H1>
      </div>
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
`;
