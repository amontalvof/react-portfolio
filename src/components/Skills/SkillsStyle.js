import styled from "styled-components";

export const SkillsWrapper = styled.div`
  .flex-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  .flex-container > div {
    width: 300px;
    margin: 10px;
  }

  .barText {
    color: var(--darkGrey);
  }

  @media screen and (min-width: 767px) {
    .flex-container > div {
      width: 700px;
      margin: 10px;
    }
  }
`;
