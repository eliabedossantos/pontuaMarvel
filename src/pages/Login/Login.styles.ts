import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Main = styled.div`
    background-color: ${colors.primary};
    height: 100vh;
`;

export const Header = styled.div`
    width: 100%;
    height: 100px;
    background-color: ${colors.primary};
    display: flex;
    justify-content: ${window.innerWidth > 768 ? 'flex-start' : 'center'};
    align-items: center;
    padding-left: ${window.innerWidth > 768 ? '20px' : '0px'};
`;

export const Logo = styled.img`
    max-width: 10em;
    height: 4em;
    object-fit: contain;
`;

export const Building = styled.img`
   width: 100%;
    height: auto;
    object-fit: contain;
    pointer-events: none;
`;

export const Card = styled.div`
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

export const Label = styled.label`
    color: ${colors.gray};
    font-family: Epilogue;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 1rem;
`;

export const ShowPassword = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
}`;







