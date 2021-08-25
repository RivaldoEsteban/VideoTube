import React from "react";
import styled from "styled-components";
import ButtonCategory from "../button-category/button-category";
import Wrapper from "../wrapper/wrapper";

const CotegoriesStyled = styled.section`
  padding: 1rem;
  div {
    display: flex;
    flex: 1;
    gap: 1.5rem;
  }
`;

const categories = [
  {
    category: "Todos",
    id: "category1",
  },
  {
    category: "Música",
    id: "category2",
  },
  {
    category: "Programación",
    id: "category3",
  },
  {
    category: "Diseño UX",
    id: "category4",
  },
];

function VideoCategory() {
  return (
    <CotegoriesStyled aria-label="categorias">
      <Wrapper>
        <div>
          {categories.map((category) => {
            return (
              <ButtonCategory key={category.id} text={category.category} />
            );
          })}
        </div>
      </Wrapper>
    </CotegoriesStyled>
  );
}

export default VideoCategory;
