import React, { useState } from "react";
import styled from "styled-components";
import Input from "./input";
import ButtonSearch from "./button-search";
import searchVideo from "../../services/searchVideo";

const SearchVideoStyled = styled.form`
  display: flex;
  align-items: center;
  max-width: 35.5rem;
  flex: 1;
  position: relative;

  span {
    position: absolute;
    top: 3.1rem;
    right: 0;
    left: 0;
    z-index: 2;
    background: white;
    color: black;
    padding: 1rem;
    font: var(--body1-regular);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    p {
      margin: 0;
    }
  }
`;

function SearchVideo() {
  const [currentInputValue, setCurrentInputValue] = useState([]);
  const [searchActive, setSearchActive] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const input = formData.get("input");
    searchVideo(input, 5)
      .then((data) => {
        setCurrentInputValue(data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <SearchVideoStyled onSubmit={handleSubmit}>
      <Input setSearchActive={setSearchActive} />
      <ButtonSearch />
      {searchActive.length > 0 && currentInputValue.length > 0 ? (
        <span>
          {currentInputValue.map((video) => {
            return <p key={video.id.videoId}>{video.snippet.title}</p>;
          })}
        </span>
      ) : null}
    </SearchVideoStyled>
  );
}

export default SearchVideo;
