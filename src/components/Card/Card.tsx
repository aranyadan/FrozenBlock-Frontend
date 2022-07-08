import React from 'react';
import styled from 'styled-components';

const Card: React.FC = ({ children }) => <StyledCard>{children}</StyledCard>;

const StyledCard = styled.div`
  background: #FFFFFF no-repeat;
  background-position: bottom right;
  border-radius: 15px;
  color: #000000 !important;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export default Card;
