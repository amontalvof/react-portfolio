import styled from "styled-components";

export const CardWrapper = styled.div`
  .polaroid {
    border-radius: 5px;
    width: 80%;
    background-color: var(--mainWhite);
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 1);
    transition: box-shadow 0.5s;
    will-change: transform;
    border: 3px solid var(--mainWhite);
    margin-bottom: 25px;
  }

  .polaroid:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 1);
  }

  .container {
    text-align: center;
    padding: 20px;
  }

  p {
    font-size: 20px;
    color: var(--darkGrey);
  }
`;
