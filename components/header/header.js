import React from "react";
import styled from "styled-components";
import Wrapper from "../wrapper/wrapper";
import HeaderContent from "../header-content/header-content";

const HeaderStyled = styled.header`
  padding: 1rem;
`;

function Header({ children }) {
  return (
    <HeaderStyled>
      <Wrapper>
        <HeaderContent>{children}</HeaderContent>
      </Wrapper>
    </HeaderStyled>
  );
}

export default Header;
