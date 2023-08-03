
import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const InputContainer = styled.div`
    width: 32rem;
    height: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem;
`;

export const StyledInput = styled.input`
    width: 100%;
    height: 100%;
    font-family: 'Epilogue', sans-serif;
    font-weight: 500;
    font-size: .9rem;
    border: none;
    color: ${colors.primaryExtraLight};
    border-radius: 0.5rem;
    padding: 0.5rem;
    outline: none;
    margin-left: 0.5rem;
`;