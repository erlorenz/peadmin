import styled from 'styled-components';

export const Card = styled.div`
  background-color: white;
  padding: 1.8rem;
  margin-bottom: 1.8rem;
  border-radius: 2px;
  // box-shadow: $box-shadow-card;
  display: block;
  overflow-x: auto;

  @media (max-width: 1000px) {
    border-top: 8px solid rgb(247, 247, 248);
  }
`;

export const Button = styled.button`
  border: none;
  background-color: $button-color;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 1.1rem 1.5rem;
  cursor: pointer;
  width: 100%;
  border-radius: 2px;
  margin: 2rem 0;

  :hover {
    background-color: $button-hover;
  }
`;

export const Input = styled.input`
  display: block;
  border: 1px solid gray;
  background-color: white;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-family: inherit;
  width: 100%;
  margin-bottom: 0.5rem;
`;
