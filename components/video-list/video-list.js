import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../card/card";
import Wrapper from "../wrapper/wrapper";
import getVideoList from "../../services/getVideoList";

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
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    getVideoList()
      .then((data) => {
        setVideoList(data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(videoList);
  return (
    <VideeoListStyled>
      <Wrapper>
        <div className="grid">
          {videoList.length > 0 &&
            videoList.map((videoData) => {
              return <Card key={videoData.id.videoId} data={videoData} />;
            })}
        </div>
      </Wrapper>
    </VideeoListStyled>
  );
}

export default VideoList;
