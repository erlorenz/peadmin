import styled from 'styled-components/macro';

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
  font-weight: bold;
  font-size: 1.1rem;
  padding: 1.1rem 1.5rem;
  cursor: pointer;
  width: 100%;
  border-radius: ${props => props.theme.borderRadius};
  margin: 1.5rem 0;

  :hover {
    background-color: ${props =>
      props.cancel ? props.theme.buttonHoverCancel : props.theme.buttonHover};
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
      props.error ? props.theme.errorBorder : '2px solid #96afb5'};
    outline: none;
  }
`;

export const Select = styled.select`
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

export const TextArea = styled.textarea`
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
  cursor: ${props => (props.hover ? 'pointer' : 'default')};
  border-bottom: ${props => (props.underline ? `1px solid lightgray` : 'none')};

  :nth-child(even) {
    background-color: ${props => props.theme.backgroundColor};
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
  white-space: pre-line;

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
