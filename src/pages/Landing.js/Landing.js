import React, { Component } from 'react';
import styled from 'styled-components/macro';
import { Card } from '../../components/UI';

export default class Landing extends Component {
  render() {
    return (
      <StyledCard>
        <Welcome>Welcome to Press Express!</Welcome>
      </StyledCard>
    );
  }
}

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Welcome = styled.h1`
  color: gray;
`;
