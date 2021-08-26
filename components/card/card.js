/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .image-container {
    position: relative;
    img {
      vertical-align: middle;
      inline-size: inherit;
      position: relative;
      width: 100%;
      object-fit: cover;
    }
    .time {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      background: var(--primary);
      padding: 0 8px;
      border-radius: 0.25rem;
      font: var(--body2-regular);
    }
  }

  .video-info {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    h3 {
      font: var(--body1-bold);
      margin: 0;
    }
    span {
      display: block;
      font: var(--body2-regular);
      color: var(--grey-2);
    }
  }
  @media (max-width: 768px) {
    .grid {
      max-inline-size: initial;
    }
  }
`;

function Card({ data }) {
  const currentDate = new Date();
  const date = new Date(data.snippet.publishedAt);
  const elapsedTime = (currentDate - date).toFixed(0);
  const daysPassed = (elapsedTime / 1000 / 60 / 60 / 24).toFixed(0);

  return (
    <CardStyled id={data.id.videoId}>
      <div className="image-container">
        <img
          className="image-video"
          src={data.snippet.thumbnails.medium.url}
          alt="cover del video"
        />
        <span className="time">10:10</span>
      </div>
      <div className="video-info">
        <div>
          <img
            className="avatar"
            src="./images/avatar.svg"
            alt="avatar del usuario"
          />
        </div>
        <div>
          <h3 className="video-name">{data.snippet.title}</h3>
          <span className="video-youtuber">{data.snippet.channelTitle}</span>
          <span className="video-views">{`Hace ${daysPassed} días`}</span>
        </div>
      </div>
    </CardStyled>
  );
}

export default Card;
