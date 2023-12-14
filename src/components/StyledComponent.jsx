import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  color: red;
  fontSize: 20px;
`;

const StyledComponent = ({ count }) => {
  return <StyledDiv>Styled Component (Rerenders: {count})</StyledDiv>;
};

export default StyledComponent;