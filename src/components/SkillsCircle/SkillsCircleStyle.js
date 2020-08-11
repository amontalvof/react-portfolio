import styled from "styled-components";

export const SkillsCircleWrapper = styled.div`
  img {
    display: block;
    margin: auto;
    width: 25%;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .circle {
    color: var(--lightBlue);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 90px;
    border-radius: 50%;
    box-shadow: 0px 10px 8px var(--darkGrey);
    margin-bottom: 20px;
  }
  .iconoTec {
    display: flex;
    font-weight: 900;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    flex-direction: column;
  }
  .iconoTec > div {
    margin: 0px;
    text-align: center;
    font-size: 14px;
  }

  @media screen and (max-width: 700px) {
    .imagen {
      display: none;
    }
  }
`;
