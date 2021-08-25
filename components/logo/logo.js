import React from "react";
import styled from "styled-components";

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  img {
    block-size: 3rem;
    inline-size: 3rem;
  }
  span {
    font: 900 normal 32px/39.03px Impact;
  }
`;

function Logo() {
  return (
    <LogoStyled aria-label="logo de la página">
      <img src="./images/leonidasesteban.com.png" alt="Logo de la página" />
      <span>VideoTube</span>
    </LogoStyled>
  );
}

export default Logo;
