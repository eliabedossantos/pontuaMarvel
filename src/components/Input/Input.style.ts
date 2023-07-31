import { styled } from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;
    

export const Input = styled.input`
    width: 100%;
    height: 100%;
    border: 1px solid ${colors.gray};
    border-radius: 8px;
    padding: 1rem 1rem;
    font-family: Epilogue;
    font-size: 1.1rem 1.2rem;
    font-weight: bold;
    color: ${colors.primary};
    &::placeholder {
        color: ${colors.gray};
        font-weight: 400;

    }
    &:focus {
        outline: none;
        border: 1px solid ${colors.primary} !important;
    }
    &:focus-visible {
        outline: none;
        border: 1px solid ${colors.primary} !important;
    }

`;

export const InputContainer = styled.div`
    width: 100%;
    height: 3.8rem;
    position: relative;
    margin-top: 1rem;
`;

export const Icon = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1rem;
    color: ${colors.gray};
    font-size: 1.2rem;
`;