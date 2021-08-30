import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Logo from "../components/logo/logo";
import Header from "../components/header/header";
import SearchVideo from "../components/navigation/search-video";
import Card from "../components/card/card";
import searchVideo from "../services/searchVideo";
import { videoList as list } from "../viodeList/list";
import SuggestedVideos from "../components/suggested-videos/suggested-videos";

const VideoStyled = styled.div`
  display: flex;
  flex-direction: column;
  block-size: 100vh;
  box-sizing: border-box;
  .video-container {
    padding: 1rem;
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
  @media (max-width: 1200px) {
    .video-container {
      grid-template-columns: auto;
      box-sizing: border-box;
    }
  }
`;

function Video() {
  const router = useRouter();
  const [videoList, setVideoList] = useState([]);
  const [currentVideo, setCurrentVideo] = useState([]);
  useEffect(() => {
    setCurrentVideo(JSON.parse(localStorage.getItem("video")));
    const search = JSON.parse(localStorage.getItem("video"));
    searchVideo(search, 10)
      .then((videoList) => {
        setVideoList(videoList.items);
      })
      .catch((err) => {
        console.log(err);
        setVideoList(list.items);
      });
  }, [router.query.v]);

  return (
    <VideoStyled>
      <Header>
        <Logo />
        <SearchVideo />
      </Header>
      <div className="video-container">
        {currentVideo.kind ? (
          <Card data={currentVideo} video={currentVideo?.id?.videoId} />
        ) : null}
        <SuggestedVideos videoList={videoList} />
      </div>
    </VideoStyled>
  );
}

export default Video;
