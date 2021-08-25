import Header from "../components/header/header";
import Logo from "../components/logo/logo";
import SearchVideo from "../components/navigation/search-video";
import VideoCategory from "../components/video-categories/cotegories";
import VideoList from "../components/video-list/video-list";
import styled from "styled-components";
import FullBlockSizeView from "../components/full-block-size/full-block-size";

const AppStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  min-block-size: inherit;
`;

export default function Home() {
  return (
    <FullBlockSizeView>
      <AppStyled>
        <Header>
          <Logo />
          <SearchVideo />
        </Header>
        <VideoCategory />
        <VideoList />
      </AppStyled>
    </FullBlockSizeView>
  );
}
