import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  .parallax {
    /* The image used */
    background: linear-gradient(
        to top right,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
      ),
      url(${(props) => props.img});

    min-height: 300px;
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .projContainer {
    background: linear-gradient(
      to top right,
      rgba(0, 183, 212),
      rgba(22, 21, 105)
    );
  }

  .flex-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  .flex-container > div {
    width: 600px;
    margin: 50px;
  }
`;
