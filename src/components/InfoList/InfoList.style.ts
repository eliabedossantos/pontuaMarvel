import { styled } from "styled-components";
import { colors } from "../../styles/colors";

export const StyledList = styled.ul`
    list-style: disc;
    margin-left: 0;
    padding-left: 1.4rem;
    
    li {
        color: ${colors.grayMedium};
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
        font-weight: 600;
    };

    li + li {
        margin-top: 0.5rem;
    };
`;

