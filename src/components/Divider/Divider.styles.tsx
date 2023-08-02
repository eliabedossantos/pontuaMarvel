import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const StyledDivider = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${colors.divider};
    margin: 1rem 0;
`;


export const StyledDividerContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 60px;
    margin-bottom: 18;
    border-bottom: 1px solid ${colors.divider};
    padding-left: 26px;
`;