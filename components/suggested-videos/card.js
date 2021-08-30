/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const CardStyled = styled.div`
  display: flex;
  gap: 1rem;
  .image-container {
    position: relative;
    .image-video {
      vertical-align: middle;
      inline-size: inherit;
      object-fit: cover;
      cursor: pointer;
      max-inline-size: 195px;
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
    .avatar {
      block-size: 2rem;
      inline-size: 2rem;
      object-fit: cover;
      vertical-align: middle;
      border-radius: 50%;
    }
  }
  @media (max-width: 768px) {
    .grid {
      max-inline-size: initial;
    }
  }
`;

function Card({ data, video }) {
  const currentDate = new Date();
  const date = new Date(data.snippet.publishedAt);
  const elapsedTime = (currentDate - date).toFixed(0);
  const daysPassed = (elapsedTime / 1000 / 60 / 60 / 24).toFixed(0);
  const router = useRouter();

  function viewVideo() {
    router.push(`/watch?v=${data.id.videoId}`);
    localStorage.setItem("video", JSON.stringify(data));
  }
  return (
    <CardStyled id={data.id.videoId}>
      {data.id.videoId ? (
        <>
          <div className="image-container">
            {video ? (
              <iframe
                src={`https://www.youtube.com/embed/${video}`}
                frameBorder="0"
                className="image-video video"
              ></iframe>
            ) : (
              <>
                <img
                  className="image-video"
                  src={data.snippet.thumbnails.medium.url}
                  alt="cover del video"
                  onClick={viewVideo}
                />
              </>
            )}
          </div>
          <div className="video-info">
            <div>
              <h3 className="video-name">{data.snippet.title}</h3>
              <span className="video-youtuber">
                {data.snippet.channelTitle}
              </span>
              <span className="video-views">{`Hace ${daysPassed} días`}</span>
            </div>
          </div>
        </>
      ) : null}
    </CardStyled>
  );
}

export default Card;
