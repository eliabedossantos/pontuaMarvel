
import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const StyledCard = styled.div`
    flex: 1;
    min-width: 260px;
    max-width: 100%;
    height: 150px;
    box-sizing: border-box;
    display: flex;
    background-color: ${colors.grayLight};
    border-radius: 0.95rem;
    padding: .95rem .6rem;
    overflow: hidden;
    text-overflow: ellipsis;


    @media (max-width: 768px) {
        min-width: 50%;
        margin-bottom: 1rem;
    }
`;

export const StyledImage = styled.img`
    width: 85px;
    height: 100%;
    object-fit: cover;
    border-radius: 0.8rem;
    margin-right: 1rem;
`;

export const StyledInfo = styled.div`   
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
    height: 100%;
    overflow: hidden;
`;

export const StyledTitle = styled.h3`
    font-size: 1.1rem;
    font-family: 'Epilogue', sans-serif;
    font-weight: 700;
    color: ${colors.black};
    margin-bottom: .6rem;
`;

export const StyledDescription = styled.p`
    font-size: .9rem;
    font-family: 'Epilogue', sans-serif;
    font-weight: 300;
    color: ${colors.black};
`;
