import React from 'react';
import { Card, CardRow, Button } from '../../components/UI';
import formatStatus from '../../utils/formatStatus';
import styled from 'styled-components/macro';
import formatPrice from '../../utils/formatPrice';

const OrderTitle = ({ order, onClick }) => {
  return (
    <CardRow>
      <TitleCard>
        <Title>
          {order.name} - {formatStatus(order.status)}
        </Title>
        <p>{formatPrice(order.total_price)}</p>
      </TitleCard>
      <ChangeCard>
        <StyledButton>CHANGE</StyledButton>
      </ChangeCard>
    </CardRow>
  );
};

export default OrderTitle;

const Title = styled.h1`
  font-size: 1.3rem;
`;

const TitleCard = styled(Card)`
  width: 80%;
`;

const ChangeCard = styled(Card)`
  width: 20%;
`;

const StyledButton = styled(Button)``;
