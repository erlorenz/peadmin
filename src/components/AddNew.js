import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components/macro';
import { Button } from './UI';

const AddNew = ({ onClick }) => {
  return (
    <Div>
      <AddButton onClick={onClick}>
        <Icon icon={faPlus} />
        Add New
      </AddButton>
    </Div>
  );
};

export default AddNew;

const Div = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const AddButton = styled(Button)`
  width: auto;
  padding: 0.5rem;
  font-size: 0.8rem;
  margin-bottom: 0.8rem;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`;
