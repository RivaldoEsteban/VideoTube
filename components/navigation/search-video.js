import React from "react";
import styled from "styled-components";
import Input from "./input";
import ButtonSearch from "./button-search";

const SearchVideoStyled = styled.form`
  display: flex;
  align-items: center;
  max-width: 35.5rem;
  flex: 1;
  position: relative;
`;

function SearchVideo() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <SearchVideoStyled onSubmit={handleSubmit}>
      <Input />
      <ButtonSearch />
    </SearchVideoStyled>
  );
}

export default SearchVideo;
