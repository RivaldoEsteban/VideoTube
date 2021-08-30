import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Context } from "./_app";
import Logo from "../components/logo/logo";
import Header from "../components/header/header";
import SearchVideo from "../components/navigation/search-video";
import Card from "../components/card/card";
import searchVideo from "../services/searchVideo";

const VideoStyled = styled.div`
  display: flex;
  flex-direction: column;
  block-size: 100vh;
  .video-container {
    padding: 1rem;
    border: 1px solid red;
    display: grid;
    grid-template-columns: auto 415px;
    overflow: auto;
    gap: 3rem;
    height: inherit;
    .video-list {
      overflow: auto;
      border: 1px solid white;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

function Video() {
  const router = useRouter();
  const [videoList, setVideoList] = useState("");
  const context = useContext(Context);

  let currentVideo;
  context.value.find((video) => {
    if (router.query.v === video.id.videoId) {
      currentVideo = video;
    }
  });

  useEffect(() => {
    const search = currentVideo.snippet.channelTitle;
    searchVideo(search, 10).then((videoList) => {
      setVideoList(videoList.items);
    });
  }, []);

  return (
    <VideoStyled>
      <Header>
        <Logo />
        <SearchVideo />
      </Header>
      <div className="video-container">
        <Card data={currentVideo} video={currentVideo.id.videoId} />
        <div className="video-list">
          {videoList.length > 0
            ? videoList.map((video) => {
                return <Card key={video.id.videoId} data={video} />;
              })
            : null}
        </div>
      </div>
    </VideoStyled>
  );
}

export default Video;
