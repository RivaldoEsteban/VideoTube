import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  max-width: 1366px;
  margin: auto;
`;

function Wrapper({ children }) {
  return <StyledWrapper>{children}</StyledWrapper>;
}

export default Wrapper;
