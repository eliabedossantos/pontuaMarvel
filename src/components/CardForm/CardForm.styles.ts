import styled from "styled-components";
import { colors } from "../../styles/colors";

export const CardStyled = styled.div`
    width: 100%;
    background-color: ${colors.white};
    border-radius: 28px;
    padding: 3em 2em;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
`;

export const Title = styled.h1`
    color: ${colors.primary};
    font-family: Epilogue;
    font-size: 2.5em;
    font-weight: 700;

    &::after {
        content: '.';
        color: ${colors.secondary};
    }
`;

export const Subtitle = styled.label`
    color: ${colors.gray};
    font-family: Epilogue;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 1rem;
`;

export const Submit = styled.button`

`;

export const SubmitText = styled.span``;
