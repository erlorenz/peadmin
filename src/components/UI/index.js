import styled from 'styled-components/macro';

export const Card = styled.div`
  background-color: white;
  padding: 1.8rem;
  margin-bottom: 1.8rem;
  border-radius: ${props => props.theme.borderRadius};
  display: block;
  overflow-x: auto;

  @media (max-width: 1000px) {
    border-top: 8px solid rgb(247, 247, 248);
  }
`;

export const Button = styled.button`
  border: none;
  background-color: ${props => props.theme.buttonColor};
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 1.1rem 1.5rem;
  cursor: pointer;
  width: 100%;
  border-radius: ${props => props.theme.borderRadius};
  margin: 1.5rem 0;

  :hover {
    background-color: ${props => props.theme.buttonHover};
  }
`;

export const Input = styled.input`
  display: block;
  border: ${props =>
    props.error ? props.theme.errorBorder : props.theme.formBorder};
  background-color: white;
  color: ${props => props.theme.labelColor};
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-family: inherit;
  width: 100%;
  border-radius: ${props => props.theme.borderRadius};
  margin: 3px 0;

  :focus {
    border: ${props =>
      props.error ? props.theme.errorBorder : '2px solid black'};
    outline: none;
  }
`;

export const Label = styled.label`
  color: ${props => props.theme.labelColor};
`;

export const TableRow = styled.tr`
  cursor: ${props => (props.pointer ? 'pointer' : 'default')};

  :nth-child(even) {
    background-color: ${props => props.theme.backgroundColor};
  }
  :hover {
    background-color: ${props => props.theme.tableHover};
  }
`;

export const TableCell = styled.td`
  padding: 1.1rem 1.8rem;
  font-size: 0.9rem;
  line-height: 1;
  white-space: pre-line;
`;
