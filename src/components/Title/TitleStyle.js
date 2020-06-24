import styled from "styled-components";

export const TitleWrapper = styled.div`
  text-align: center;

  .titleResume {
    padding: 20px 30px 0;
    font-size: 30px;
    color: ${(props) => (props.white ? "var(--mainWhite)" : "var(--darkGrey)")};
    letter-spacing: var(--mainSpacing);
    font-weight: 900;
  }

  @media screen and (min-width: 767px) {
    .titleResume {
      padding: 20px 200px 0;
      font-size: 35px;
    }
  }
`;
