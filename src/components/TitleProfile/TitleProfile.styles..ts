
import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 1rem;
    gap: .4rem;
    
`;


export const StyledTitle = styled.h3`
    font-size: 1.5rem;
    font-family: 'Epilogue', sans-serif;
    font-weight: 700;
    color: ${colors.primaryLight2};
    margin-bottom: 0rem;

    &::after {
        content: ' / ';
        color: ${colors.secondary};
        font-size: 1.5rem;
        font-family: 'Epilogue', sans-serif;
        font-weight: 700;
    }
`;

export const StyledSubtitle = styled.h4`
    font-size: 1.5rem;
    font-family: 'Epilogue', sans-serif;
    font-weight: 300;
    color: ${colors.gray};
    margin-bottom: 0rem;
`;
