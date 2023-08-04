import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const RowContainer = styled.div`
    background-color: ${colors.white};
    width: 100%;
    height: 100vh;    
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const RowContainerWrapped = styled.div`
    background-color: ${colors.white};
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 0 1rem;
    gap: 10px;
`;

