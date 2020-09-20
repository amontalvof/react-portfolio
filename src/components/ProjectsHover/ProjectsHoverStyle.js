import styled from "styled-components";

export const ProjectsHoverWrapper = styled.div`
  background: linear-gradient(
    to top right,
    rgba(0, 183, 212) 20%,
    rgba(22, 21, 105) 80%
  );
  .flex-container-practice {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .flex-container-practice > div {
    width: 600px;
    margin: 50px;
    z-index: 2;
  }
`;
