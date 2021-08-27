import React, { useContext } from "react";
import styled from "styled-components";
import searchVideo from "../../services/searchVideo";
import { Context } from "../../pages/_app";

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
  const context = useContext(Context);
  function buttonActive() {
    setButtonActive(text.id);
    searchVideo(text.category.toLowerCase(), 20)
      .then((data) => {
        context.setVideoList(data.items);
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
