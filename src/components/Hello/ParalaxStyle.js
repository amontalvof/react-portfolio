import styled from "styled-components";

export const ParalaxWrapper = styled.div`
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

  .flex-container {
    background: linear-gradient(
      to top right,
      rgba(22, 21, 105),
      rgba(0, 183, 212)
    );
    padding-top: 80px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  .flex-container > div {
    width: 500px;
    margin: 30px;
  }

  img {
    max-width: 60%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    box-shadow: -20px 20px var(--lightBlue);
  }

  h1 {
    font-size: 25px;
    color: var(--mainWhite);
    letter-spacing: var(--mainSpacing);
    font-weight: 900;
  }

  p {
    font-size: 16px;
    color: var(--mainWhite);
    letter-spacing: var(--mainSpacing);
  }

  @media screen and (min-width: 767px) {
    .flex-container {
      padding-top: 100px;
    }

    h1 {
      font-size: 50px;
      font-weight: 900;
    }

    p {
      font-size: 20px;
    }
  }
`;
