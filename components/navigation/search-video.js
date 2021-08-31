import React, { useState } from "react";
import styled from "styled-components";
import Input from "./input";
import ButtonSearch from "./button-search";
import searchVideo from "../../services/searchVideo";
import { useRouter } from "next/router";

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
      cursor: pointer;
    }
  }
`;

function SearchVideo() {
  const [currentInputValue, setCurrentInputValue] = useState([]);
  const [searchActive, setSearchActive] = useState(false);
  const router = useRouter();
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

  function handleVideo(video) {
    setSearchActive(false);
    router.push(`/watch?v=${video.id.videoId}`);
    localStorage.setItem("video", JSON.stringify(video));
  }

  return (
    <SearchVideoStyled onSubmit={handleSubmit}>
      <Input setSearchActive={setSearchActive} />
      <ButtonSearch />
      {searchActive.length > 0 && currentInputValue.length > 0 ? (
        <span>
          {currentInputValue.map((video) => {
            return (
              <p
                key={video.id.videoId}
                onClick={() => {
                  handleVideo(video);
                }}
              >
                {video.snippet.title}
              </p>
            );
          })}
        </span>
      ) : null}
    </SearchVideoStyled>
  );
}

export default SearchVideo;
