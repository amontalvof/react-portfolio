import styled from 'styled-components';

export const ParalaxWrapper = styled.div`
    position: relative;
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
            rgba(22, 21, 105) 20%,
            rgba(0, 183, 212) 80%
        );
        padding-top: 80px;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
    }

    .flex-container > div {
        width: 500px;
        margin: 30px;
    }

    .about_me {
        aspect-ratio: 1.35/1;
        border-radius: 2rem;
        background: linear-gradient(
            45deg,
            transparent,
            var(--lightBlue),
            transparent
        );
        display: grid;
        place-items: center;
    }
    .about_me-image {
        border-radius: 2rem;
        overflow: hidden;
        transform: rotate(10deg);
        transition: var(--mainTransition);
    }

    .about_me-image:hover {
        transform: rotate(0);
    }

    p {
        font-size: 16px;
        color: var(--mainWhite);
        letter-spacing: var(--mainSpacing);
    }

    #particles {
        display: none;
    }

    #myElement {
        font-size: 25px;
        font-weight: 900;
        color: var(--mainWhite);
    }

    .ityped-cursor {
        color: var(--mainWhite);
        font-size: 25px;
        font-weight: 900;
        opacity: 1;
        -webkit-animation: blink 0.4s infinite;
        -moz-animation: blink 0.4s infinite;
        animation: blink 0.4s infinite;
        animation-direction: alternate;
    }

    @keyframes blink {
        100% {
            opacity: 0;
        }
    }

    @-webkit-keyframes blink {
        100% {
            opacity: 0;
        }
    }

    @-moz-keyframes blink {
        100% {
            opacity: 0;
        }
    }

    .titleNameContainer {
        height: 60px;
        width: 100%;
        display: flex;
        align-items: center;
    }

    @media screen and (min-width: 767px) {
        .flex-container {
            padding-top: 100px;
        }

        #myElement {
            font-size: 50px;
        }

        .ityped-cursor {
            font-size: 50px;
        }

        p {
            font-size: 20px;
        }
    }
    @media screen and (min-width: 1024px) {
        #particles {
            display: block;
        }
    }
`;
