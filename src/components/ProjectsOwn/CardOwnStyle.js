import styled from 'styled-components';
import { FaExternalLinkAlt } from 'react-icons/fa';

export const CardOwnWrapper = styled.div`
    position: relative;
    background-color: var(--darkGrey);
    transition: all 0.4s ease-out;
    box-shadow: 0 35px 77px -17px rgba(0, 0, 0, 0.7);
    border-radius: 10px;

    .image {
        opacity: 1;
        display: block;
        width: 100%;
        height: auto;
        transition: 0.5s ease;
        backface-visibility: hidden;
        border-radius: 10px;
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

    .flex-container {
        display: flex;
        justify-content: flex-end;
    }

    h1 {
        font-weight: 900;
        text-transform: uppercase;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
        font-size: 25px;
        color: var(--mainBlue);
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
    width: 25px;
    height: 25px;
    margin-left: 25px;
    color: var(--mainWhite);
    transition: all 0.3s linear;

    :hover {
        color: var(--mainBlue);
    }
`;
