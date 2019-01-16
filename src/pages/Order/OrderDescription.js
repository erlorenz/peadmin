import React from 'react';
import { Card, CardTitle } from '../../components/UI';
import styled from 'styled-components/macro';

const OrderDescription = ({ order }) => {
  return (
    <Card>
      <CardTitle>Description</CardTitle>
      <Div>{order.description}</Div>
    </Card>
  );
};

export default OrderDescription;

const Div = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  white-space: pre-line;
  padding: 1rem;
  width: 100%;
`;
