import styled from "styled-components";

export const ContactWrapper = styled.div`
  background-color: var(--darkBlue);
  text-align: center;
  box-shadow: 0 -5px 5px var(--mainBlue);

  .flex-container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  .flex-container > div {
    width: 300px;
    margin: 10px;
    text-align: center;
  }

  h3,
  p {
    color: var(--mainWhite);
    font-size: 20px;
    padding: 0.5rem;
  }

  .iconosSociales {
    font-size: 30px;
    color: var(--mainWhite);
    transition: all 0.3s linear;
    padding: 0 50px 0;
  }
  .iconosSociales:hover {
    color: ${(props) => props.theme.rainbow.palette.brand.main};
    cursor: pointer;
  }

  @media (max-width: 450px) {
    p {
      font-size: 16px;
    }
  }
`;
