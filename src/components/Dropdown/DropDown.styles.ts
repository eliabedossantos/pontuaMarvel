import styled from "styled-components";
import { colors } from "../../styles/colors";
import { IDropDownState, INameStyledProps } from "./types";

export const Container = styled.div`
    width: 100%;
    position: relative;
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    width: 100%;
    height: 3rem;
    margin-top: 1rem;
}`;

export const Content = styled(Container)`
    height: 100%;
    background-color: ${colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .9rem;
    border: 1px solid ${colors.border};
    border-radius: .6rem;
`;

export const RoundedImage = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    object-fit: cover;
`;

export const Name = styled.span<INameStyledProps>`
    font-size: 1rem;
    color: ${props => props.default ? colors.grayMedium : colors.grayStrong};
    font-weight: 500;
    margin-left: .5rem;
    margin-right: auto;
`;

export const DropdownContainer = styled.div<IDropDownState>`
    width: 100%;
    height: 10rem;
    overflow-y: auto;
    position: absolute;
    top: 4.5rem;
    left: 0;
    background-color: ${colors.white};
    border: .6px solid ${colors.border};
    border-radius: .6rem;
    z-index: 1;
    overflow-x: hidden;
    display: ${props => props.isopen ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const DropdownItems = styled.ul`
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const DropdownItem = styled.li`
    width: 100%;
    cursor: pointer;
    &:hover {
        background-color: ${colors.grayLight};
    }
`;

export const ButtonItem = styled(Button)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: .6rem .9rem;

`;