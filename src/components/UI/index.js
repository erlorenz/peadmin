import styled from 'styled-components/macro';
import { darken } from 'polished';

/**
 * Export all basic UI elements
 */

export * from './table';

export const Card = styled.div`
  background-color: white;
  padding: 0.9rem;
  margin-bottom: 0.9rem;
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;

  @media (min-width: 1000px) {
    padding: 1.8rem;
    margin-bottom: 1.8rem;
  }
`;

export const CardTitle = styled.h1`
  margin-bottom: 1.2rem;
  font-size: 1.15rem;
  font-weight: 700;
  align-self: flex-start;
`;

export const Button = styled.button`
  border: none;
  background-color: ${props =>
    props.cancel ? props.theme.buttonColorCancel : props.theme.buttonColor};
  color: white;
  font-size: 1rem;
  padding: 0.8rem 2.5rem;
  cursor: pointer;
  width: 100%;
  border-radius: ${props => props.theme.borderRadius};

  :hover {
    background-color: ${props =>
      props.cancel
        ? darken(0.05, props.theme.buttonColorCancel)
        : darken(0.07, props.theme.buttonColor)};
  }
`;

export const CardRow = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;
