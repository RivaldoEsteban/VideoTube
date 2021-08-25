import React from "react";
import styled from "styled-components";

const HeaderContentStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 3.12rem;
`;

function HeaderContent({ children }) {
  return <HeaderContentStyled>{children}</HeaderContentStyled>;
}

export default HeaderContent;
