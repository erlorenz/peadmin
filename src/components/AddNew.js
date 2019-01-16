import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components/macro';
import { Button } from './UI';

const AddNew = ({ onClick }) => {
  return (
    <AddButton onClick={onClick}>
      <Icon icon={faPlus} />
      Add New
    </AddButton>
  );
};

export default AddNew;

const AddButton = styled(Button)`
  width: auto;
  padding: 0.4rem 1rem;
  font-size: 0.7rem;
  height: 80%;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`;
