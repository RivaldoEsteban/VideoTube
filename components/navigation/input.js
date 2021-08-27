import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import searchVideo from "../../services/searchVideo";

const InputStyled = styled.input`
  padding: 0.75rem 6.12rem 0.75rem 1rem;
  border: 1px solid #6f6f6f;
  background: none;
  color: white;
  font: var(--body1-regular);
  height: inherit;
  flex: 1;
  border-radius: 0.5rem;
`;

function Input({ setSearchActive }) {
  const inputValue = useRef(null);
  function handleSearch() {
    setSearchActive(inputValue.current.value);
  }
  return (
    <InputStyled
      placeholder="Buscar video"
      name="input"
      autoComplete="off"
      ref={inputValue}
      onChange={handleSearch}
    ></InputStyled>
  );
}

export default Input;
