import styled from 'styled-components';

export const ProjectsWrapper = styled.div`
    .projContainer {
        background: linear-gradient(
            to top right,
            rgba(0, 183, 212) 20%,
            rgba(22, 21, 105) 80%
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
