import styled from 'styled-components';

export const TitleWrapper = styled.div`
    text-align: center;

    .titleResume {
        padding: 50px 30px 0;
        font-size: 30px;
        color: ${(props) =>
            props.white ? 'var(--mainWhite)' : 'var(--darkGrey)'};
        letter-spacing: var(--mainSpacing);
        font-weight: 900;
    }

    @media screen and (min-width: 767px) {
        .titleResume {
            padding: 50px 200px 0;
            font-size: 35px;
        }
    }

    @media (max-width: 1024px) {
        display: ${(props) => (props.className === 'desktop' ? 'none' : '')};
    }

    @media (min-width: 1025px) {
        display: ${(props) => (props.className === 'mobile' ? 'none' : '')};
    }
`;
