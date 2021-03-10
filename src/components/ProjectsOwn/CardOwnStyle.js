import styled from 'styled-components';
import { FaExternalLinkAlt } from 'react-icons/fa';

export const CardOwnWrapper = styled.div`
    position: relative;
    background-color: var(--darkGrey);
    transition: all 0.4s ease-out;
    box-shadow: 0 35px 77px -17px rgba(0, 0, 0, 0.7);

    .image {
        opacity: 1;
        display: block;
        width: 100%;
        height: auto;
        transition: 0.5s ease;
        backface-visibility: hidden;
    }

    .middle {
        width: 90%;
        transition: 0.5s ease;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        color: var(--mainWhite);
    }

    h1 {
        text-decoration: underline;
        font-weight: 900;
        text-transform: uppercase;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
        font-size: 25px;
    }

    p {
        font-weight: 300;
        margin: 20px 0 20px 0;
        font-size: 20px;
    }

    :hover {
        transform: scale(1.1);
    }

    :hover .image {
        opacity: 0.1;
    }

    :hover .middle {
        opacity: 1;
    }
`;

export const StyledIcon = styled(FaExternalLinkAlt)`
    width: 20px;
    height: 20px;
    margin-right: 20px;
    color: var(--mainWhite);
    transition: all 0.3s linear;

    :hover {
        color: var(--mainBlue);
    }
`;
