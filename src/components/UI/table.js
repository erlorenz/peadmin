import styled from 'styled-components/macro';

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
  padding: 0.5rem;
  font-size: 0.9rem;
  line-height: 1;
  white-space: ${props => (props.noWrap ? 'nowrap' : 'pre-line')};

  @media (min-width: 1000px) {
    padding: 0.8rem;
  }
`;
