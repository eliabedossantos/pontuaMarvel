
import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { StyledCardProps } from './types';


export const StyledCard = styled.button<StyledCardProps>`
    flex: 1;
    min-width: ${props => props.showAllContent ? '100%' : '300px' };
    max-width: 100%;
    height: ${props => props.showAllContent ? '15rem'  : '9.3rem' };
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: 'flex-start';
    justify-content: flex-start;
    background-color: ${props => props.showAllContent ? colors.white : colors.grayLight};
    border-radius: 0.95rem;
    padding: ${props => props.showAllContent ? '2.6rem 2.1rem' : '.95rem .6rem;'};
    overflow: hidden;
    text-overflow: ellipsis;
    box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.06);
    pointer-events: ${props => props.showAllContent ? 'none' : 'auto'};
    cursor: ${props => props.showAllContent ? 'default' : 'pointer'};


    @media (max-width: 768px) {
        min-width: 50%;
        margin-bottom: 1rem;
    }
`;

export const StyledImage = styled.img<StyledCardProps>`
    width: ${props => props.showAllContent ? '5.6rem' : '5.3rem' };
    height: ${props => props.showAllContent ? '5.6rem' : '100%' };
    object-fit: cover;
    border-radius: ${props => props.showAllContent ? '50%' : '0.8rem' };
    margin-right: ${props => props.showAllContent ? '1.8rem' : '1rem' };
`;

export const StyledInfo = styled.div<StyledCardProps>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: baseline;
    flex: 1;
    height: 100%;
    overflow: hidden;
    text-align: start;
`;

export const StyledTitle = styled.h3<StyledCardProps>`
    font-size: ${props => props.showAllContent ? '1.5rem' : '1.1rem' };
    font-family: 'Epilogue', sans-serif;
    font-weight: 700;
    color: ${props => props.showAllContent ? colors.primaryLight2 : colors.black};
    margin-bottom: ${props => props.showAllContent ? '1.1rem' : '.6rem' };
    
`;

export const StyledDescription = styled.p<StyledCardProps>`
    font-size: ${props => props.showAllContent ? '1rem' : '.9rem' };
    font-family: 'Epilogue', sans-serif;
    font-weight: ${props => props.showAllContent ? 600 : 300 };
    color: ${props => props.showAllContent ? colors.gray : colors.black};
`;