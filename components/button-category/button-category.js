import React from "react";
import styled from "styled-components";

const ButtonCategoryStyled = styled.button`
  border-radius: 4rem;
  font: var(--body1-regular);
  color: var(--white);
  padding: 0.5rem 1rem;
  background: var(--black);
  border: 1px solid gray;
  cursor: pointer;
  :active {
    transform: scale(0.98);
  }
`;

function ButtonCategory({ text }) {
  return <ButtonCategoryStyled>{text}</ButtonCategoryStyled>;
}

export default ButtonCategory;
