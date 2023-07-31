import styled from "styled-components";
import { colors } from "../../styles/colors";
import { IDropDownState } from "./types";

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
}`;

export const Content = styled(Container)`
    width: 100%;
    height: 3rem;
    background-color: ${colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .9rem;
    border: 1px solid ${colors.border};
`;

export const RoundedImage = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    object-fit: cover;
`;

export const Name = styled.span`
    font-size: 1rem;
    color: ${colors.grayStrong};
    font-weight: 500;
    margin-left: .5rem;
    margin-right: auto;
`;

export const DropdownItems = styled.div<IDropDownState>`
    width: 100%;
    max-height: 10rem;
    overflow-y: auto;
    position: absolute;
    top: 3rem;
    left: 0;
    background-color: ${colors.white};
    border: 1px solid ${colors.border};
    border-radius: .6rem;
    elevation: 1;
    z-index: 1;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    overflow-x: hidden;
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

    
