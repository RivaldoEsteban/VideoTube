import React from "react";
import styled from "styled-components";
import Card from "./card";

const SuggestedVideosStyled = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function SuggestedVideos({ videoList }) {
  return (
    <SuggestedVideosStyled>
      {videoList.length > 0
        ? videoList.map((video) => {
            return <Card key={video.id.videoId} data={video} />;
          })
        : null}
    </SuggestedVideosStyled>
  );
}

export default SuggestedVideos;
