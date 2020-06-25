import styled from "styled-components";

export const ContactWrapper = styled.div`
  background-color: var(--darkBlue);
  text-align: center;
  box-shadow: 0 -5px 5px var(--mainBlue);

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
    padding: 0 30px 0;
  }
  .iconosSociales:hover {
    color: ${(props) => props.theme.rainbow.palette.brand.main};
    cursor: pointer;
  }

  @media (max-width: 450px) {
    h3,
    p {
      font-size: 16px;
    }
  }
`;
