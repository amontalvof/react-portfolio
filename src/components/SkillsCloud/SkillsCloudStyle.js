import styled from "styled-components";

export const SkillsCloudWrapper = styled.div`
  max-width: 1000px;

  margin-left: auto;
  margin-right: auto;
  .cloudmobile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .tag-cloud {
    display: none;
  }
  .tag-cloud > div {
    transition: 1.5s;
  }

  @media screen and (min-width: 768px) {
    height: 50vh;
    .cloudmobile {
      display: none;
    }
    .tag-cloud {
      display: block;
    }
  }
`;
