import React from 'react';
import styled from 'styled-components/macro';

function NoPrint({ children }) {
  return <Div>{children}</Div>;
}

export default NoPrint;

const Div = styled.div`
  @media print {
    display: none;
  }
`;
