import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Card from "../card/card";
import Wrapper from "../wrapper/wrapper";
import searchVideo from "../../services/searchVideo";
import { Context } from "../../pages/_app";
import { videoList as list } from "../../viodeList/list";

const VideeoListStyled = styled.main`
  padding: 1rem;
  overflow: auto;
  box-sizing: border-box;
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-flow: auto;
    gap: 1.5rem;
  }
`;

function VideoList() {
  const context = useContext(Context);
  const videoList = context.value;
  const currentList = list;

  useEffect(() => {
    searchVideo("todo sobre programacion", 20)
      .then((data) => {
        context.setVideoList(data.items);
      })
      .catch((err) => {
        console.log(err);
        context.setVideoList(currentList.items);
      });
  }, []);

  return (
    <VideeoListStyled>
      <Wrapper>
        <div className="grid">
          {videoList.length > 0
            ? videoList.map((videoData) => {
                {
                  return videoData.id.videoId ? (
                    <Card key={videoData.id.videoId} data={videoData} />
                  ) : null;
                }
              })
            : null}
        </div>
      </Wrapper>
    </VideeoListStyled>
  );
}

export default VideoList;
