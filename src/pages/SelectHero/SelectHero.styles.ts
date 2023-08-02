import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { Link } from 'react-router-dom';

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

export const ButtonEnter = styled(Link)`
    background-color: ${colors.primary};
    border: none;
    outline: none;
    padding: .9rem 1.5rem;
    border-radius: .6rem;
    color: ${colors.white};
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Epilogue', sans-serif;
    margin-top: 1.5rem;
    transition: .3s;
    &:hover{
        background-color: ${colors.primaryLight};
    }
    display: block;
    width: fit-content;
    margin-left: auto;
`;








