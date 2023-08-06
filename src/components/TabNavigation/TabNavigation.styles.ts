
import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const TabNavigationContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 1rem;
    background-color: ${colors.white};
    
`;

export const TabNavigationItem = styled.button<{ isactive: boolean }>`
    border: none;
    background-color: transparent;
    color: ${({ isactive }) => (isactive ? colors.primary : colors.gray)};
    font-size: 0.8rem;
    font-weight: 500;
`;