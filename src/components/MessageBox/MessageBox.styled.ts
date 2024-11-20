import styled from "@emotion/styled";
import {colors} from "../../styles/colors";
import { keyframes } from "@emotion/react";

export const MessageBoxStyled = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        font-size: 1.1rem;
        font-weight: 600;
        color: ${colors.grey700};
    }
`;

const dotAnimation = keyframes`
    0%, 100% {
        opacity: 0;
    }

    60% {
        opacity: 1;
    }
`;

export const LoadingStyled = styled.div`
    display: flex;

    span {
        align-self: end;
        animation: ${dotAnimation} 1s infinite;

        &:nth-of-type(1) {
            animation-delay: .1s;
        }

        &:nth-of-type(2) {
            animation-delay: 0.3s;
        }

        &:nth-of-type(3) {
            animation-delay: .5s;
        }
    }
`;