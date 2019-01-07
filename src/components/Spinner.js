import Loader from 'react-loader-spinner';
import React from 'react';
import styled from 'styled-components/macro';

const Spinner = () => {
  return (
    <Div>
      <Loader color="black" />
    </Div>
  );
};

export default Spinner;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
