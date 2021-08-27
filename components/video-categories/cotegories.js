import React, { useState } from "react";
import styled from "styled-components";
import ButtonCategory from "../button-category/button-category";
import Wrapper from "../wrapper/wrapper";

const CotegoriesStyled = styled.section`
  padding: 1rem;
  overflow: auto;
  .category-container {
    white-space: nowrap;
    overflow: auto;
  }
`;

const categories = [
  {
    category: "Todos",
    id: "category1",
  },
  {
    category: "Leonidas Esteban",
    id: "category2",
  },
  {
    category: "Música",
    id: "category3",
  },
  {
    category: "Programación",
    id: "category4",
  },
  {
    category: "Diseño ux",
    id: "category5",
  },
];

function VideoCategory() {
  const [buttonActive, setButtonActive] = useState("category1");
  return (
    <CotegoriesStyled aria-label="categorias">
      <Wrapper>
        <div className="category-container">
          {categories.map((category) => {
            const active = buttonActive === category.id ? "is-active" : null;
            return (
              <ButtonCategory
                key={category.id}
                text={category}
                setButtonActive={setButtonActive}
                active={active}
              />
            );
          })}
        </div>
      </Wrapper>
    </CotegoriesStyled>
  );
}

export default VideoCategory;
