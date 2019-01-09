import React from 'react';
import { Card } from '../../components/UI';
import styled from 'styled-components/macro';
import formatPrice from '../../utils/formatPrice';
import StatusIndicator from '../../components/StatusIndicator';

const OrderTitle = ({ order, onClick }) => {
  const loggy = () => console.log('clicked');
  return (
    <TitleCard>
      <Title>{order.name}</Title>
      <Price>{formatPrice(order.total_price)}</Price>
      <StyledStatusIndicator status={order.status} onClick={onClick} />
    </TitleCard>
  );
};

export default OrderTitle;

const Title = styled.h1`
  font-size: 1.3rem;
  margin-bottom: 0.3rem;
`;

const Price = styled(Title)``;

const TitleCard = styled(Card)`
  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const StyledStatusIndicator = styled(StatusIndicator)`
  padding: 1rem 1.5rem;
  margin: 0.5rem 0;
  cursor: pointer;
`;
