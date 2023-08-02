import styled from "styled-components";
import { colors } from "../../styles/colors";
import { StyledH1Props, StyledSpanProps } from "./types";

export const CardStyled = styled.div`
    width: 100%;
    background-color: ${colors.white};
    border-radius: 28px;
    padding: 3em 2em;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
`;

export const Title = styled.h1<StyledH1Props>`
    color: ${colors.primary};
    font-family: Epilogue;
    font-size: 2.2em;
    font-weight: 700;

    &::after {
        content: ${props => props.aftercontent ? `'${props.aftercontent}'` : '.'};
        color: ${colors.secondary};
    }
`;

export const Subtitle = styled.label`
    color: ${colors.gray};
    font-family: Epilogue;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 1.7rem;
`;

export const Submit = styled.button`
    width: 100%;
    height: 3.8em;
    background-color: ${colors.primary};
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1em;    
`;

export const SubmitText = styled.span<StyledSpanProps>`
    color: ${colors.white};
    font-family: Epilogue;
    font-size: 1.2em;
    font-weight: 700;
    margin-right: ${props => props.icon ? '.5em' : '0'};
`;
