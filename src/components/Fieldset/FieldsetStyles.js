import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { darken } from 'polished';

const borderSize = '1px';
const labelColor = '#363636';
const errorColor = '#ff3860';
const borderColor = '#dbdbdb';

export const Fieldset = styled.div`
  margin-bottom: 0.8rem;
  width: 100%;
`;

export const Label = styled.label`
  color: ${labelColor};
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

export const Control = styled.div`
  font-size: 1rem;
  position: relative;
  text-align: left;
`;

export const Help = styled.p`
  color: ${errorColor};
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.3rem;
`;

export const Input = styled.input`
  display: block;
  border: ${borderSize} solid
    ${props => (props.error ? errorColor : borderColor)};
  background-color: white;
  color: inherit;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-family: inherit;
  width: 100%;
  max-width: 100%;
  border-radius: ${props => props.theme.borderRadius};
  margin: 3px 0;

  :hover {
    border: ${borderSize} solid ${darken(0.1, borderColor)};
  }

  :focus {
    border: ${borderSize} solid
      ${props => (props.error ? errorColor : '#96afb5')};
    outline: none;
  }
`;

export const Select = styled(Input)``;

export const TextArea = styled(Input)``;
