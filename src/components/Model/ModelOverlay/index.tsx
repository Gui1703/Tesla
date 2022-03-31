import { ReactNode } from 'react';

import { Container } from './styles';

interface ModelOverlayProps {
  children: ReactNode;
}

function ModelOverlay({ children }: ModelOverlayProps) {
  return (
    <Container>
      <h1>ModelOverlay</h1>
      {children}
    </Container>
  );
};

export default ModelOverlay;
