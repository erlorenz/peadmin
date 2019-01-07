import React from 'react';
import styled from 'styled-components/macro';
import formatStatus from '../../utils/formatStatus';
import { Card, CardRow } from '../../components/UI';
import UpdateStatus from './UpdateStatus';
import { Mutation } from 'react-apollo';
import { CHANGE_STATUS } from '../../queries';

const TitleAndStatus = ({ order }) => {
  const handleSubmit = mutation => async (
    values,
    { setSubmitting, setStatus },
  ) => {
    try {
      const result = await mutation({ variables: { status: values.status } });
      console.log(result);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <CardRow>
      <StyledCard>
        <Title>
          {order.name} - {formatStatus(order.status)}
        </Title>
      </StyledCard>
      <Mutation mutation={CHANGE_STATUS}>
        {(mutation, { data, error, loading }) => (
          <UpdateStatus onSubmit={handleSubmit(mutation)} />
        )}
      </Mutation>
    </CardRow>
  );
};

export default TitleAndStatus;

const Title = styled.h1`
  font-size: 1rem;

  @media (min-width: 1000px) {
    font-size: 1.2rem;
  }
`;

const StyledCard = styled(Card)`
  @media (min-width: 1000px) {
    width: 70%;
  }
`;
