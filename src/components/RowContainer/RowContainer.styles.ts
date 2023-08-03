import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
    background-color: ${colors.white};
    width: 100%;
    height: 100vh;    
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
`;