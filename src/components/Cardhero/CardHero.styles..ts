
import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const StyledCard = styled.div`
    flex: 1;
    min-width: 25%;
    height: 150px;
    box-sizing: border-box;
    display: flex;
    background-color: ${colors.grayLight};
    border-radius: 0.95rem;
    padding: .95rem .6rem;
    

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


