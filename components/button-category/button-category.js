import React from "react";
import styled from "styled-components";
import searchVideo from "../../services/searchVideo";

const ButtonCategoryStyled = styled.button`
  border-radius: 4rem;
  font: var(--body1-regular);
  color: var(--white);
  padding: 0.5rem 1rem;
  background: ${(props) => props.active || "var(--black)"};
  border: 1px solid gray;
  cursor: pointer;
  white-space: nowrap;
  margin: 0 1rem;
  /* display: inline-block; */
  :active {
    transform: scale(0.98);
  }
  &.is-active {
    background: white;
    color: black;
  }
`;

function ButtonCategory({ text, setButtonActive, active }) {
  async function buttonActive() {
    setButtonActive(text.id);
    console.log("hola");
    searchVideo(text.category.toLowerCase())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log("hubo un error en la peticion", err));
  }
  return (
    <ButtonCategoryStyled onClick={buttonActive} className={active}>
      {text.category}
    </ButtonCategoryStyled>
  );
}

export default ButtonCategory;
