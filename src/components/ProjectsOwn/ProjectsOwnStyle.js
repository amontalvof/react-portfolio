import styled from 'styled-components';

export const ProjectsOwnWrapper = styled.div`
    background: linear-gradient(
        to top right,
        rgba(0, 183, 212) 20%,
        rgba(22, 21, 105) 80%
    );
    .flex-container-main {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .flex-container-main > div {
        width: 600px;
        margin: 30px;
        z-index: 2;
    }

    .flex-container-practice {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .flex-container-practice > div {
        width: 400px;
        margin: 30px;
        z-index: 2;
    }

    @media (max-width: 1024px) {
        .flex-container-main {
            display: none;
        }

        .flex-container-practice {
            display: none;
        }

        
    }

    @media (min-width: 1025px) {
        .mobile_carousel{
            display: none;
        }
    }
`;
