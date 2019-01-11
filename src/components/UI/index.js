import styled from 'styled-components/macro';
import { darken } from 'polished';

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
  padding: 1.0625rem 2.5rem;
  cursor: pointer;
  width: 100%;
  border-radius: ${props => props.theme.borderRadius};

  :hover {
    background-color: ${props =>
      props.cancel
        ? darken(0.05, props.theme.buttonColorCancel)
        : darken(0.05, props.theme.buttonColor)};
  }
`;

export const TableRow = styled.tr`
  cursor: ${props => (props.hover ? 'pointer' : 'default')};
  border-bottom: ${props => (props.underline ? `1px solid lightgray` : 'none')};

  :nth-child(even) {
    background-color: ${props =>
      props.striped ? props.theme.backgroundColor : 'transparent'};
  }
  :hover {
    background-color: ${props =>
      props.hover ? props.theme.tableHover : undefined};
  }
`;

export const TableCell = styled.td`
  padding: 0.9rem 1.3rem;
  font-size: 0.9rem;
  line-height: 1;
  white-space: ${props => (props.noWrap ? 'nowrap' : 'pre-line')};

  @media (min-width: 1000px) {
    padding: 1.1rem 1.8rem;
  }
`;

export const CardRow = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;
