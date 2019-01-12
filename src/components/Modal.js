import React from 'react';
import { Portal } from 'react-portal';
import styled from 'styled-components/macro';
import { Card } from './UI';

const Modal = ({ children, onDismiss }) => {
  return (
    <Portal>
      <Overlay onClick={onDismiss}>
        <StyledCard onClick={e => e.stopPropagation()}>
          {React.cloneElement(children, { onDismiss: onDismiss })}
        </StyledCard>
      </Overlay>
    </Portal>
  );
};

export default Modal;

const StyledCard = styled(Card)`
  height: 100%;
  max-width: 450px;
  justify-content: center;

  @media (min-width: 450px) {
    height: auto;
  }
`;

const Overlay = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #000000bd;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (min-width: 450px) {
    padding: 2rem;
  }
`;
