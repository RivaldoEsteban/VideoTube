import React from "react";
import styled from "styled-components";

const ButtonSearchStyled = styled.button`
  background: var(--black);
  padding: 0.75rem 2rem;
  color: #6f6f6f;
  font: var(--body1-regular);
  border: 1px solid var(--black);
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  position: absolute;
  right: 0;
  cursor: pointer;
  border-left: 1px solid #6f6f6f;
`;

function ButtonSearch() {
  return (
    <ButtonSearchStyled>
      <i className="icon-search"></i>
    </ButtonSearchStyled>
  );
}

export default ButtonSearch;
